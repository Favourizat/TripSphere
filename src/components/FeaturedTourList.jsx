import React from "react";
import TourCard from "./TourCard";
import { tourdata } from "../constant/tourdata";

const FeaturedTourList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {tourdata?.slice(0, 6).map((tour) => (
        <div key={tour.id}>
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedTourList;