import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const TourCard = ({ tour }) => {
    const {
        id,
        destination,
        country,
        image,
        price,
        averageRating,
        reviews,
    } = tour;

    return (
        <div className="w-full overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-56 xs:h-60 sm:h-64 md:h-60 lg:h-64">
                <img
                    src={image}
                    alt={destination}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Featured Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                    Featured
                </span>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 md:p-6">

                {/* Destination & Rating */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    {/* Destination */}
                    <div className="flex min-w-0 items-center gap-2 text-gray-600">
                        <FaLocationDot className="shrink-0 text-blue-600" />

                        <span className="truncate font-medium">
                            {destination}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex shrink-0 items-center gap-1.5">
                        <FaStar className="text-yellow-400" />

                        <span className="font-semibold">
                            {averageRating}
                        </span>

                        <span className="text-xs text-gray-500 sm:text-sm">
                            ({reviews} reviews)
                        </span>
                    </div>
                </div>

                {/* Country */}
                <h2 className="mt-2 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 sm:text-2xl">
                    <Link to={`/tours/${id}`}>
                        {country}
                    </Link>
                </h2>

                {/* Price & Button */}
                <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-5 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:border-0 sm:pt-0">

                    {/* Price */}
                    <div className="min-w-0">
                        <h4 className="text-xl font-bold text-blue-600 sm:text-2xl">
                            {price}

                            <span className="ml-1 text-xs font-normal text-gray-500 sm:text-sm">
                                / per person
                            </span>
                        </h4>
                    </div>

                    {/* Button */}
                    <Link
                        to={`/book-tour/${id}`}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourCard;