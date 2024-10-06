import { forwardRef, useImperativeHandle } from "react";
import { db } from "../../../configs/index";
import { carImages } from "../../../configs/schema";
import { storage } from "../../../configs/firebaseConfig";
import {
  getDownloadURL,
  ref as firebaseRef,
  uploadBytes,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { eq } from "drizzle-orm";
const UploadImages = ({ setLoader, carInfo, mode }, ref) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [editCarImagesList, setEditCarImagesList] = useState([]);
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    triggerUpload(carListingId) {
      // This method will be called from the parent component
      uploadImages(carListingId);
    },
  }));

  const handleSelectedImages = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i = i + 1) {
      setSelectedImages((prevValue) => {
        const file = files[i];
        return [...prevValue, file];
      });
    }
  };

  useEffect(() => {
    setEditCarImagesList([]);
    if (mode == "edit" && carInfo.images) {
      carInfo.images.forEach((image) => {
        setEditCarImagesList((prevValue) => [...prevValue, image.imageUrl]);
      });
    }
  }, [carInfo, mode]);

  const uploadImages = async (carListingId) => {
    if (mode === "edit") {
      setSelectedImages(editCarImagesList);
    }
    selectedImages.forEach(async (image) => {
      const fileName = Date.now() + Math.random() * 10 + ".jpeg";
      const storageRef = firebaseRef(storage, "car-marketplace/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      await uploadBytes(storageRef, image, metaData)
        .then((snapshot) => {
          console.log("Images Uploaded");
        })
        .then((response) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            const result = await db.insert(carImages).values({
              imageUrl: downloadUrl,
              carListingId: carListingId,
            });
            if (result) {
              setLoader(false);
            }
          });
        });
    });
    setLoader(false);
  };

  const removeImage = (image) => {
    const newSelectedImages = selectedImages.filter((value) => value != image);
    setSelectedImages(newSelectedImages);
  };

  const removeImageFromDb = async (image, idx) => {
    const result = await db
      .delete(carImages)
      .where(eq(carImages.id, carInfo.images[idx].id));

    const imageList = editCarImagesList.filter((img) => img != image);

    setEditCarImagesList(imageList);
  };

  return (
    <div className="md:px-10 my-8 mt-12">
      <h2 className="text-xl font-semibold mb-5"> Upload Car Images</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mode === "edit" &&
          editCarImagesList.map((image, idx) => {
            return (
              <div
                key={idx}
                className="h-[200px] rounded-lg overflow-hidden relative cursor-pointer"
              >
                <IoIosCloseCircle
                  className="text-2xl absolute top-0 right-0 m-2 text-primary cursor-pointer"
                  onClick={() => {
                    removeImageFromDb(image, idx);
                  }}
                />
                <img
                  src={image}
                  alt="car-image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

        {selectedImages.map((image, idx) => {
          return (
            <div
              key={idx}
              className="h-[200px] rounded-lg overflow-hidden relative cursor-pointer"
            >
              <IoIosCloseCircle
                className="text-2xl absolute top-0 right-0 m-2 text-primary cursor-pointer"
                onClick={() => {
                  removeImage(image);
                }}
              />
              <img
                src={URL.createObjectURL(image)}
                alt="car-image"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
        <div>
          <label
            htmlFor="image-select"
            className="bg-blue-200 h-[200px] flex justify-center items-center rounded-lg border cursor-pointer border-dotted border-primary hover:shadow-md hover:bg-blue-50"
          >
            <h2 className="text-xl text-center text-primary">+</h2>
          </label>
          <input
            type="file"
            id="image-select"
            className="opacity-0"
            multiple={true}
            onChange={handleSelectedImages}
          />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(UploadImages);
