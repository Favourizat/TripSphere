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
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">

            {/* Top Section */}
            <div className="p-4 sm:p-5 md:p-6">

                {/* Airline */}
                <div className="mb-6 flex items-center justify-between gap-3">

                    <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-12 sm:w-12">
                            <Plane
                                size={20}
                                className="text-blue-600 sm:h-6 sm:w-6"
                            />
                        </div>

                        <div className="min-w-0">
                            <h3 className="truncate font-bold text-gray-900 sm:text-base">
                                {flight.airline}
                            </h3>

                            <p className="text-xs text-gray-500 sm:text-sm">
                                {flight.flightNumber}
                            </p>
                        </div>

                    </div>

                    <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600 sm:px-3 sm:text-sm">
                        {flight.stops}
                    </span>

                </div>

                {/* Flight Route */}
                <div className="flex items-center justify-between gap-2 sm:gap-4">

                    {/* Departure */}
                    <div className="min-w-0 flex-1">
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {flight.departureTime}
                        </p>

                        <p className="font-semibold text-gray-700 sm:text-base">
                            {flight.fromCode}
                        </p>

                        <p className="truncate text-xs text-gray-500 sm:text-sm">
                            {flight.from}
                        </p>
                    </div>

                    {/* Flight Duration */}
                    <div className="flex w-[35%] shrink-0 flex-col items-center sm:w-[40%]">

                        <p className="mb-2 text-[10px] text-gray-500 sm:text-xs">
                            {flight.duration}
                        </p>

                        <div className="flex w-full items-center gap-1.5 sm:gap-2">

                            <div className="h-px flex-1 bg-gray-300" />

                            <Plane
                                size={15}
                                className="shrink-0 text-blue-600 sm:h-[18px] sm:w-[18px]"
                            />

                            <div className="h-px flex-1 bg-gray-300" />

                        </div>

                        <p className="mt-2 text-[10px] text-gray-500 sm:text-xs">
                            {flight.stops}
                        </p>

                    </div>

                    {/* Arrival */}
                    <div className="min-w-0 flex-1 text-right">

                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {flight.arrivalTime}
                        </p>

                        <p className="font-semibold text-gray-700 sm:text-base">
                            {flight.toCode}
                        </p>

                        <p className="truncate text-xs text-gray-500 sm:text-sm">
                            {flight.to}
                        </p>

                    </div>

                </div>

                {/* Details */}
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 border-t border-gray-100 pt-5 text-xs text-gray-500 sm:mt-6 sm:text-sm">

                    <div className="flex items-center gap-2">
                        <Clock size={15} className="shrink-0 sm:h-4 sm:w-4" />
                        <span>{flight.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Luggage size={15} className="shrink-0 sm:h-4 sm:w-4" />
                        <span>{flight.baggage}</span>
                    </div>

                    <span>{flight.class}</span>

                </div>

            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-4 bg-gray-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">

                <div>
                    <p className="text-xs text-gray-500 sm:text-sm">
                        From
                    </p>

                    <p className="text-xl font-bold text-blue-600 sm:text-2xl">
                        {flight.price}
                    </p>

                    <p className="text-[10px] text-gray-500 sm:text-xs">
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:px-5 sm:text-base"
                >
                    View Details
                    <ArrowRight size={17} />
                </button>

            </div>

        </div>
    );
};

export default FlightCard;