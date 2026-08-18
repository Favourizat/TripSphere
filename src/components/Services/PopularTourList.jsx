import TourCard from "../TourCard";
import { tourdata } from "../../constant/tourdata";

const PopularTourList = () => {
    return (
        <div className="mb-12 px-4 text-center sm:px-6 md:px-12 lg:px-20">
            
            {/* Section Heading */}
            <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                    Popular Destinations
                </p>

                <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600 sm:mt-5 sm:w-36"></div>
            </div>

            {/* Tour Cards */}
            <div className="grid grid-cols-1 gap-6 text-left sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {tourdata.slice(0, 6).map((tour) => (
                    <TourCard
                        key={tour.id}
                        tour={tour}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularTourList;