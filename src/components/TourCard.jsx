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
        <>
            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative">
                    <img
                        src={image}
                        alt={destination}
                        className="w-full h-64 object-cover"
                    />

                    {/* Featured Badge */}
                    <span className="absolute top-4 left-4 bg-white text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                        Featured
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                    {/* Destination & Rating */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <FaLocationDot className="text-blue-600" />
                            <span className="font-medium">{destination}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-400" />
                            <span className="font-semibold">{averageRating}</span>
                            <span className="text-gray-500 text-sm">
                                ({reviews} reviews)
                            </span>
                        </div>
                    </div>

                    {/* Country */}
                    <h2 className="mt-2 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        <Link to={`/tours/${id}`}>{country}</Link>
                    </h2>

                    {/* Price & Button */}
                    <div className="mt-6 flex items-center justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-blue-600">
                                ${price}
                                <span className="text-gray-500 text-sm">
                                    / per person
                                </span>
                            </h4>

                        </div>

                        <Link
                            to={`/popular-destinations/${id}`}
                            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
                        >
                            View details
                        </Link>
                    </div>
                </div>


            </div>


        </>
    );
};

export default TourCard;