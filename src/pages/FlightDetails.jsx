import { useLocation, useNavigate } from "react-router-dom";

import {
    Plane,
    Clock,
    Luggage,
    CalendarDays,
    ArrowLeft,
    Check,
} from "lucide-react";

const FlightDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const flight = location.state?.flight;


    // Prevent page from crashing if no flight was passed
    if (!flight) {
        return (
            <div className="min-h-screen flex items-center justify-center">

                <div className="text-center">

                    <h2 className="text-2xl font-bold text-gray-800">
                        Flight not found
                    </h2>

                    <button
                        onClick={() => navigate("/flights")}
                        className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl"
                    >
                        Back to Flights
                    </button>

                </div>

            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50">

            {/* ================= HEADER ================= */}

            <section className="bg-blue-600 text-white px-6 py-10">

                <div className="max-w-5xl mx-auto">

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-blue-100 hover:text-white mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Flights
                    </button>

                    <h1 className="text-4xl font-bold">
                        Flight Details
                    </h1>

                    <p className="mt-2 text-blue-100">
                        Review your flight before booking.
                    </p>

                </div>

            </section>


            {/* ================= CONTENT ================= */}

            <section className="max-w-5xl mx-auto px-6 py-10">

                {/* Airline */}

                <div className="bg-white rounded-2xl shadow-sm p-8">

                    <div className="flex flex-col sm:flex-row justify-between gap-6">

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">

                                <Plane
                                    size={28}
                                    className="text-blue-600"
                                />

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold text-gray-900">
                                    {flight.airline}
                                </h2>

                                <p className="text-gray-500">
                                    Flight {flight.flightNumber}
                                </p>

                            </div>

                        </div>


                        <div className="text-left sm:text-right">

                            <p className="text-sm text-gray-500">
                                Starting from
                            </p>

                            <p className="text-3xl font-bold text-blue-600">
                                ${flight.price}
                            </p>

                            <p className="text-sm text-gray-500">
                                per passenger
                            </p>

                        </div>

                    </div>


                    {/* ================= ROUTE ================= */}

                    <div className="mt-10 bg-gray-50 rounded-2xl p-6">

                        <div className="flex items-center justify-between gap-5">

                            {/* Departure */}

                            <div>

                                <p className="text-3xl font-bold">
                                    {flight.departureTime}
                                </p>

                                <p className="text-xl font-semibold mt-1">
                                    {flight.fromCode}
                                </p>

                                <p className="text-gray-500">
                                    {flight.from}
                                </p>

                            </div>


                            {/* Middle */}

                            <div className="flex-1 text-center">

                                <p className="text-sm text-gray-500 mb-2">
                                    {flight.duration}
                                </p>

                                <div className="flex items-center gap-3">

                                    <div className="h-px bg-gray-300 flex-1" />

                                    <Plane
                                        className="text-blue-600"
                                        size={22}
                                    />

                                    <div className="h-px bg-gray-300 flex-1" />

                                </div>

                                <p className="text-sm text-green-600 mt-2 font-medium">
                                    {flight.stops}
                                </p>

                            </div>


                            {/* Arrival */}

                            <div className="text-right">

                                <p className="text-3xl font-bold">
                                    {flight.arrivalTime}
                                </p>

                                <p className="text-xl font-semibold mt-1">
                                    {flight.toCode}
                                </p>

                                <p className="text-gray-500">
                                    {flight.to}
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ================= FLIGHT INFORMATION ================= */}

                    <div className="mt-8">

                        <h3 className="text-xl font-bold mb-5">
                            Flight Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="flex items-center gap-3">
                                <CalendarDays className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Departure Date
                                    </p>

                                    <p className="font-semibold">
                                        {flight.departureDate}
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-center gap-3">
                                <CalendarDays className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Return Date
                                    </p>

                                    <p className="font-semibold">
                                        {flight.returnDate}
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-center gap-3">
                                <Clock className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Duration
                                    </p>

                                    <p className="font-semibold">
                                        {flight.duration}
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-center gap-3">
                                <Luggage className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Baggage
                                    </p>

                                    <p className="font-semibold">
                                        {flight.baggage}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* ================= INCLUDED ================= */}

                    <div className="mt-8 border-t border-gray-100 pt-8">

                        <h3 className="text-xl font-bold mb-5">
                            What's Included
                        </h3>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">
                                <Check className="text-green-600" size={20} />
                                <span>
                                    {flight.baggage} checked baggage
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-600" size={20} />
                                <span>
                                    {flight.class} seating
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-600" size={20} />
                                <span>
                                    In-flight entertainment
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-600" size={20} />
                                <span>
                                    Complimentary refreshments
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* ================= BOOK ================= */}

                    <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-5">

                        <div>

                            <p className="text-gray-500">
                                Total from
                            </p>

                            <p className="text-3xl font-bold text-gray-900">
                                ${flight.price}
                            </p>

                            <p className="text-sm text-gray-500">
                                per passenger
                            </p>

                        </div>


                        <button
                            onClick={() =>
                                navigate("/contact", {
                                    state: {
                                        type: "flight",
                                        flight: flight,
                                    },
                                })
                            }
                            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition"
                        >
                            Book This Flight
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default FlightDetails;