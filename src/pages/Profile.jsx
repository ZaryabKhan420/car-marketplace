import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "../../configs/index";
import { carImages, carListing } from "../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import formatResult from "../assets/Shared/Service";
import CarItem from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Inbox from "../components/Inbox";

const Profile = () => {
  const [carList, setCarList] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getUserCarListing();
    }
  }, [user]);

  const getUserCarListing = async () => {
    const dbResult = await db
      .select()
      .from(carListing)
      .leftJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.createdBy, user.primaryEmailAddress.emailAddress))
      .orderBy(desc(carListing.id));
    // Service.formatResult(dbResult);
    let result = formatResult(dbResult);
    setCarList(result);
  };

  const handleEdit = (id) => {
    navigate(`/add-listing?mode=edit&id=${id}`);
  };

  const handleDeletion = async (value, id) => {
    if (value === "Cancel") {
    } else if (value === "Continue") {
      await db.delete(carImages).where(eq(carImages.carListingId, id));
      await db.delete(carListing).where(eq(carListing.id, id));
      toast("Car Deleted.");
      navigate("/profile");
    }
  };

  return (
    <div className="my-16 container">
      <Tabs defaultValue="my-listing">
        <TabsList className="mb-16 sm:mb-5 flex flex-wrap justify-start items-center w-full gap-2">
          <div className="bg-[#bfcafa] w-full sm:w-[74%] md:w-[78%] lg:w-[83%] xl:w-[87%] px-4 py-2 rounded-xl">
            <TabsTrigger value="my-listing">My Listing</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
          </div>
          <Button onClick={(e) => navigate("/add-listing")}>
            + Add New Listing
          </Button>
        </TabsList>

        <TabsContent value="my-listing" className="mt-10 mx-5">
          <div className="flex flex-col justify-start items-start gap-5 w-full">
            <h2 className="text-3xl font-bold text-black">My Listing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
              {carList.map((car, idx) => {
                return (
                  <div key={idx}>
                    <CarItem car={car} />
                    <div className="flex justify-center items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        className="w-[80%]"
                        onClick={() => handleEdit(car.id)}
                      >
                        Edit
                      </Button>
                      <Button variant="destructive">
                        <AlertDialog>
                          <AlertDialogTrigger>
                            {" "}
                            <FaTrashAlt />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter
                              onClick={(e) => {
                                handleDeletion(e.target.innerText, car.id);
                              }}
                            >
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="inbox" className="mt-10 mx-5">
          <Inbox />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
