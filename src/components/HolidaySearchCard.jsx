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
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <img
                src={holiday.image}
                alt={holiday.title}
                className="h-56 w-full object-cover"
            />

            <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                    {holiday.title}
                </h3>

                {/* Destination */}
                <div className="mt-3 flex items-center gap-2 text-gray-500">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{holiday.destination}</span>
                </div>

                {/* Duration */}
                <div className="mt-3 flex items-center gap-2 text-gray-500">
                    <FaClock className="text-blue-600" />
                    <span>{holiday.duration}</span>
                </div>

                {/* Rating */}
                {holiday.rating && (
                    <div className="mt-3 flex items-center gap-2">
                        <FaStar className="text-yellow-400" />
                        <span className="font-medium text-gray-700">
                            {holiday.rating}
                        </span>
                    </div>
                )}

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">

                    <div>
                        <p className="text-sm text-gray-500">
                            From
                        </p>

                        <p className="text-xl font-bold text-blue-600">
                            ${Number(holiday.price).toLocaleString()}
                        </p>

                        <p className="text-xs text-gray-400">
                            per person
                        </p>
                    </div>

                    <button
                        onClick={handleViewDetails}
                        className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        View Details
                    </button>

                </div>
            </div>
        </div>
    );
};

export default HolidaySearchCard;