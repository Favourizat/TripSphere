import React from "react";
import TourCard from "./TourCard";
import { tourdata } from "../constant/tourdata";

const FeaturedTourList = () => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-10 xl:gap-10">
      {tourdata?.slice(0, 6).map((tour) => (
        <div key={tour.id} className="min-w-0">
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedTourList;