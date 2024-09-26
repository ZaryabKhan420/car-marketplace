import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";
import {
  createSendBirdUser,
  createSendBirdChannel,
} from "@/assets/Shared/Service";
import { useNavigate } from "react-router-dom";
const UserDetails = ({ carDetails }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const messageToOwner = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split("@")[0];
    const ownersUserId = carDetails.createdBy.split("@")[0];
    // Current User ID
    try {
      const response = await createSendBirdUser(
        userId,
        user.fullName,
        user.imageUrl
      ).then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
    // Current Car Owner ID
    try {
      const response = await createSendBirdUser(
        ownersUserId,
        carDetails.userName,
        carDetails.userImageUrl
      ).then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
    // Current Channel
    try {
      const response = await createSendBirdChannel(
        [userId, ownersUserId],
        carDetails.listingTitle
      ).then((data) => {
        console.log(data);
        console.log("Channel Created");
        navigate("/profile");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 ">
      {carDetails.userName ? (
        <div className="p-8 border border-slate-300 shadow-md rounded-xl flex flex-col justify-start items-start gap-2">
          <h2 className="font-semibold text-2xl mb-5">Owner Details</h2>
          <img
            src={carDetails?.userImageUrl}
            alt={carDetails.userName}
            loading="lazy"
            className="w-[70px] h-[70px] rounded-full"
          />
          <h2 className="text-lg font-bold">{carDetails?.userName}</h2>
          <h2 className="text-md text-gray-500">{carDetails?.createdBy}</h2>
          <Button className="w-full mt-8" size="lg" onClick={messageToOwner}>
            Message Owner
          </Button>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-300 animate-pulse rounded-xl">
          {" "}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
