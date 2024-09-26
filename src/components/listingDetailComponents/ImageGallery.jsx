import React from "react";

const ImageGallery = ({ carDetails }) => {
  return (
    <div>
      {carDetails.images ? (
        <img
          src={carDetails?.images[0]?.imageUrl}
          alt={carDetails?.listingDetails}
          className="w-full h-[500px] object-cover rounded-xl"
        />
      ) : (
        <div className="w-full h-[500px] bg-slate-300 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
};

export default ImageGallery;
