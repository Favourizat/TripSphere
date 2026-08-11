import { useNavigate } from "react-router-dom";
import {
    Plane,
    Clock,
    Luggage,
    ArrowRight,
} from "lucide-react";

const FlightCard = ({ flight }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">

            {/* Top Section */}
            <div className="p-6">

                {/* Airline */}
                <div className="flex items-center justify-between mb-6">

                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Plane
                                size={24}
                                className="text-blue-600"
                            />
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900">
                                {flight.airline}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {flight.flightNumber}
                            </p>
                        </div>

                    </div>

                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                        {flight.stops}
                    </span>

                </div>


                {/* Flight Route */}
                <div className="flex items-center justify-between gap-4">

                    {/* Departure */}
                    <div>
                        <p className="text-2xl font-bold text-gray-900">
                            {flight.departureTime}
                        </p>

                        <p className="font-semibold text-gray-700">
                            {flight.fromCode}
                        </p>

                        <p className="text-sm text-gray-500">
                            {flight.from}
                        </p>
                    </div>


                    {/* Flight Duration */}
                    <div className="flex-1 flex flex-col items-center">

                        <p className="text-xs text-gray-500 mb-2">
                            {flight.duration}
                        </p>

                        <div className="w-full flex items-center gap-2">

                            <div className="h-px bg-gray-300 flex-1" />

                            <Plane
                                size={18}
                                className="text-blue-600"
                            />

                            <div className="h-px bg-gray-300 flex-1" />

                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                            {flight.stops}
                        </p>

                    </div>


                    {/* Arrival */}
                    <div className="text-right">

                        <p className="text-2xl font-bold text-gray-900">
                            {flight.arrivalTime}
                        </p>

                        <p className="font-semibold text-gray-700">
                            {flight.toCode}
                        </p>

                        <p className="text-sm text-gray-500">
                            {flight.to}
                        </p>

                    </div>

                </div>


                {/* Details */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">

                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {flight.duration}
                    </div>

                    <div className="flex items-center gap-2">
                        <Luggage size={16} />
                        {flight.baggage}
                    </div>

                    <span>
                        {flight.class}
                    </span>

                </div>

            </div>


            {/* Bottom */}
            <div className="bg-gray-50 px-6 py-5 flex items-center justify-between">

                <div>
                    <p className="text-sm text-gray-500">
                        From
                    </p>

                    <p className="text-2xl font-bold text-blue-600">
                        ${flight.price}
                    </p>

                    <p className="text-xs text-gray-500">
                        per passenger
                    </p>
                </div>


                <button
                    onClick={() =>
                        navigate(`/flight-details/${flight.id}`, {
                            state: {
                                flight,
                            },
                        })
                    }
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    View Details
                    <ArrowRight size={18} />
                </button>

            </div>

        </div>
    );
};

export default FlightCard;