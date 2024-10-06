import React, { useEffect, useState, useRef } from "react";
import carDetails from "../../assets/Shared/carDetails.json";
import features from "../../assets/Shared/features.json";
import InputField from "./InputField";
import DropDownField from "./DropDownField";
import TextAreaField from "./TextAreaField";
import IconField from "./IconField";
import UploadImages from "./UploadImages";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { db } from "../../../configs/index";
import { carImages, carListing } from "../../../configs/schema";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { toast } from "sonner";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import formatResult from "@/assets/Shared/Service";
const AddListing = () => {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [listingDetails, setListingDetails] = useState({});
  const [searchParams] = useSearchParams();
  const uploadImagesRef = useRef(null);

  const userData = useUser();
  const mode = searchParams.get("mode");
  const recordId = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === "edit") {
      getListingDetails();
    }
  }, []);

  const handleFeaturesInput = (name, value) => {
    setFeaturesData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleInput = (name, value) => {
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    toast("Please Wait...");
    if (mode === "edit") {
      try {
        const result = await db
          .update(carListing)
          .set({
            ...formData,
            features: featuresData,
            createdBy: userData.user.primaryEmailAddress.emailAddress,
            userName: userData.fullName,
            userImageUrl: userData.imageUrl,
            publishOn: moment().format("DD/MM/YYYY"),
          })
          .where(eq(recordId, carListing.id))
          .returning({ id: carListing.id });
        setLoader(false);
        if (result) {
          uploadImagesRef.current.triggerUpload(result[0].id);
        }
        navigate("/profile");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const result = await db
          .insert(carListing)
          .values({
            ...formData,
            features: featuresData,
            createdBy: userData.user.primaryEmailAddress.emailAddress,
            publishOn: moment().format("DD/MM/YYYY"),
          })
          .returning({ id: carListing.id });
        if (result) {
          uploadImagesRef.current.triggerUpload(result[0].id);
        }
        navigate("/profile");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const getListingDetails = async () => {
    const result = await db
      .select()
      .from(carListing)
      .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.id, recordId));
    const res = formatResult(result);
    setListingDetails(res[0]);
    setFeaturesData(res[0].features);
    setFormData(res[0]);
  };

  return (
    <>
      <form className="container my-16" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-black">Add New Listing</h1>
        <div className="md:px-10 my-8 mt-12">
          <h2 className="text-xl font-semibold mb-5"> Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {carDetails.carDetails.map((value, idx) => {
              return (
                <div key={idx}>
                  <div className="flex justify-start items-center gap-2">
                    <IconField icon={value.icon} />
                    <label
                      htmlFor={value.name}
                      className="text-sm font-semibold my-2"
                    >
                      {value.label}
                    </label>
                    {value.required === true && (
                      <span className="text-sm text-red-500">*</span>
                    )}
                  </div>
                  {value.fieldType === "text" ||
                  value.fieldType === "number" ? (
                    <InputField
                      value={value}
                      handleInput={handleInput}
                      carInfo={listingDetails}
                    />
                  ) : null}
                  {value.fieldType === "dropdown" && (
                    <>
                      <DropDownField
                        value={value}
                        handleInput={handleInput}
                        carInfo={listingDetails}
                      />
                    </>
                  )}
                  {value.fieldType === "textarea" ? (
                    <TextAreaField
                      value={value}
                      handleInput={handleInput}
                      carInfo={listingDetails}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:px-10 my-8 mt-12">
          <h2 className="text-xl font-semibold mb-5"> Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {features.features.map((value, idx) => {
              return (
                <div
                  className="flex justify-start items-center gap-2"
                  key={value.name}
                >
                  <Checkbox
                    carInfo={listingDetails}
                    name={value.name}
                    checked={featuresData?.[value.name]}
                    onCheckedChange={(e) => handleFeaturesInput(value.name, e)}
                  />
                  <h2>{value.label}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <UploadImages
          carInfo={listingDetails}
          ref={uploadImagesRef}
          setLoader={setLoader}
          mode={mode}
        />
        <div className="md:px-10  my-8 mt-12 flex justify-end items-center w-full">
          <Button type="submit">
            {loader ? <LuLoader2 className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddListing;
