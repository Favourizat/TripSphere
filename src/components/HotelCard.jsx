import { Link } from "react-router-dom";
import { MapPin, Star, Wifi, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">

            {/* Image */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700">
                    Featured
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">
                            {hotel.name}
                        </h3>

                        <div className="flex items-center gap-1 mt-2 text-gray-500">
                            <MapPin size={16} />
                            <span className="text-sm">
                                {hotel.location}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg">
                        <Star size={15} fill="currentColor" />
                        <span className="font-semibold">
                            {hotel.rating}
                        </span>
                    </div>
                </div>

                {/* Reviews */}
                <p className="text-sm text-gray-500 mt-2">
                    {hotel.reviews} reviews
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-6 mt-4">
                    {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {hotel.amenities.map((amenity) => (
                        <span
                            key={amenity}
                            className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs"
                        >
                            {amenity}
                        </span>
                    ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">

                    <div>
                        <span className="text-2xl font-bold text-gray-900">
                            ${hotel.price}
                        </span>

                        <span className="text-sm text-gray-500">
                            {" "} / night
                        </span>
                    </div>

                    <button
                        onClick={() =>
                            navigate("/contact", {
                                state: {
                                    type: "hotel",
                                    hotel: hotel,
                                },
                            })
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
                    >
                        View Details
                    </button>

                </div>
            </div>
        </div>
    );
};

export default HotelCard;