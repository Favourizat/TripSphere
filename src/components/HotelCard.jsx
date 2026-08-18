import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-52 overflow-hidden sm:h-60">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Featured Badge */}
                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm sm:left-4 sm:top-4 sm:text-sm">
                    Featured
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">

                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0 flex-1">

                        <h3 className="break-words text-lg font-bold leading-7 text-gray-800 sm:text-xl">
                            {hotel.name}
                        </h3>

                        {/* Location */}
                        <div className="mt-2 flex items-start gap-1.5 text-gray-500">
                            <MapPin
                                size={16}
                                className="mt-0.5 shrink-0"
                            />

                            <span className="min-w-0 break-words text-xs sm:text-sm">
                                {hotel.location}
                            </span>
                        </div>

                    </div>

                    {/* Rating */}
                    <div className="flex shrink-0 items-center gap-1 rounded-lg bg-blue-50 px-2 py-1 text-blue-600 sm:px-2.5 sm:py-1">
                        <Star
                            size={14}
                            fill="currentColor"
                            className="sm:h-[15px] sm:w-[15px]"
                        />

                        <span className="text-sm font-semibold">
                            {hotel.rating}
                        </span>
                    </div>

                </div>

                {/* Reviews */}
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                    {hotel.reviews} reviews
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-600">
                    {hotel.description}
                </p>

                {/* Amenities */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity) => (
                        <span
                            key={amenity}
                            className="rounded-full bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600 sm:px-3"
                        >
                            {amenity}
                        </span>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {hotel.price}
                        </span>

                        <span className="text-xs text-gray-500 sm:text-sm">
                            / night
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        onClick={() =>
                            navigate("/contact", {
                                state: {
                                    type: "hotel",
                                    hotel: hotel,
                                },
                            })
                        }
                        className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 min-[420px]:w-auto sm:text-base"
                    >
                        View Details
                    </button>

                </div>

            </div>
        </div>
    );
};

export default HotelCard;