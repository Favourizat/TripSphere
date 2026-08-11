import TourCard from "../TourCard";
import { tourdata } from "../../constant/tourdata";

const PopularTourList = () => {
    return (
        <div className="mb-12 text-center px-6">
                    {/* Section Heading */}
                    <div className="mb-6">
                        <p className="text-3xl font-bold text-gray-900">
                            Popular Destinations
                        </p>

                        <div className="mx-auto mt-5 h-1 w-36 rounded-full bg-blue-600"></div>
                    </div>

                    {/* Tour Cards */}
                    <div className="grid gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
                        {tourdata.slice(0, 6).map((tour) => (
                            <TourCard
                                key={tour.id}
                                tour={tour}
                            />
                        ))}
                    </div>
                </div>
    )
}
export default PopularTourList;