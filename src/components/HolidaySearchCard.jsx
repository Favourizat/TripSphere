import { useNavigate } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaClock,
    FaStar,
} from "react-icons/fa";

const HolidaySearchCard = ({ holiday }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/holiday-search/${holiday.id}`);
    };

    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="h-52 w-full overflow-hidden sm:h-56">
                <img
                    src={holiday.image}
                    alt={holiday.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">

                {/* Title */}
                <h3 className="text-lg font-bold leading-7 text-gray-900 sm:text-xl">
                    {holiday.title}
                </h3>

                {/* Destination */}
                <div className="mt-3 flex items-start gap-2 text-sm text-gray-500 sm:text-base">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-blue-600" />

                    <span className="min-w-0 break-words">
                        {holiday.destination}
                    </span>
                </div>

                {/* Duration */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 sm:text-base">
                    <FaClock className="shrink-0 text-blue-600" />

                    <span>
                        {holiday.duration}
                    </span>
                </div>

                {/* Rating */}
                {holiday.rating && (
                    <div className="mt-3 flex items-center gap-2 text-sm sm:text-base">
                        <FaStar className="shrink-0 text-yellow-400" />

                        <span className="font-medium text-gray-700">
                            {holiday.rating}
                        </span>
                    </div>
                )}

                {/* Bottom */}
                <div className="mt-6 flex flex-col gap-4 border-t border-gray-200 pt-5 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">

                    {/* Price */}
                    <div>
                        <p className="text-xs text-gray-500 sm:text-sm">
                            From
                        </p>

                        <p className="text-lg font-bold text-blue-600 sm:text-xl">
                            {Number(holiday.price).toLocaleString()}
                        </p>

                        <p className="text-xs text-gray-400">
                            per person
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleViewDetails}
                        className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 min-[400px]:w-auto sm:px-5 sm:text-base"
                    >
                        View Details
                    </button>

                </div>

            </div>
        </div>
    );
};

export default HolidaySearchCard;