import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  Home,
  Profile,
  AddListing,
  SearchByCategory,
  SearchPage,
  ListingDetails,
} from "./pages/Index.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import { Conf } from "./conf/Conf";
// Import your publishable key
const PUBLISHABLE_KEY = Conf.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/search/:category" element={<SearchByCategory />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/listing-details/:id" element={<ListingDetails />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
