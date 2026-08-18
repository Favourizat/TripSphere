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
            <div className="flex min-h-screen items-center justify-center px-5">
                <div className="w-full max-w-md text-center">
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                        Flight not found
                    </h2>

                    <button
                        onClick={() => navigate("/flights")}
                        className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:text-base"
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

            <section className="bg-blue-600 px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8">

                <div className="mx-auto w-full max-w-5xl">

                    <button
                        onClick={() => navigate(-1)}
                        className="mb-5 flex items-center gap-2 text-sm text-blue-100 transition hover:text-white sm:mb-6 sm:text-base"
                    >
                        <ArrowLeft size={18} />
                        Back to Flights
                    </button>

                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                        Flight Details
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
                        Review your flight before booking.
                    </p>

                </div>

            </section>

            {/* ================= CONTENT ================= */}

            <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

                {/* Airline */}

                <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7 md:p-8">

                    {/* ================= AIRLINE / PRICE ================= */}

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        {/* Airline */}

                        <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-14 sm:w-14">

                                <Plane
                                    size={24}
                                    className="text-blue-600 sm:h-7 sm:w-7"
                                />

                            </div>

                            <div className="min-w-0">

                                <h2 className="break-words text-xl font-bold text-gray-900 sm:text-2xl">
                                    {flight.airline}
                                </h2>

                                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                                    Flight {flight.flightNumber}
                                </p>

                            </div>

                        </div>

                        {/* Price */}

                        <div className="text-left sm:text-right">

                            <p className="text-sm text-gray-500">
                                Starting from
                            </p>

                            <p className="mt-1 text-2xl font-bold text-blue-600 sm:text-3xl">
                                {flight.price}
                            </p>

                            <p className="text-xs text-gray-500 sm:text-sm">
                                per passenger
                            </p>

                        </div>

                    </div>

                    {/* ================= ROUTE ================= */}

                    <div className="mt-8 rounded-2xl bg-gray-50 p-4 sm:mt-10 sm:p-6">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5">

                            {/* Departure */}

                            <div className="min-w-0">

                                <p className="text-2xl font-bold sm:text-3xl">
                                    {flight.departureTime}
                                </p>

                                <p className="mt-1 text-lg font-semibold sm:text-xl">
                                    {flight.fromCode}
                                </p>

                                <p className="break-words text-sm text-gray-500 sm:text-base">
                                    {flight.from}
                                </p>

                            </div>

                            {/* Middle */}

                            <div className="w-full sm:flex-1">

                                <div className="flex items-center gap-3">

                                    <div className="h-px flex-1 bg-gray-300" />

                                    <Plane
                                        className="shrink-0 text-blue-600"
                                        size={20}
                                    />

                                    <div className="h-px flex-1 bg-gray-300" />

                                </div>

                                <div className="mt-2 flex items-center justify-center gap-3">

                                    <p className="text-xs text-gray-500 sm:text-sm">
                                        {flight.duration}
                                    </p>

                                    <span className="text-gray-300">
                                        •
                                    </span>

                                    <p className="text-xs font-medium text-green-600 sm:text-sm">
                                        {flight.stops}
                                    </p>

                                </div>

                            </div>

                            {/* Arrival */}

                            <div className="min-w-0 text-left sm:text-right">

                                <p className="text-2xl font-bold sm:text-3xl">
                                    {flight.arrivalTime}
                                </p>

                                <p className="mt-1 text-lg font-semibold sm:text-xl">
                                    {flight.toCode}
                                </p>

                                <p className="break-words text-sm text-gray-500 sm:text-base">
                                    {flight.to}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ================= FLIGHT INFORMATION ================= */}

                    <div className="mt-8 sm:mt-10">

                        <h3 className="mb-5 text-lg font-bold sm:text-xl">
                            Flight Information
                        </h3>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            {/* Departure Date */}

                            <div className="flex items-start gap-3">

                                <CalendarDays
                                    className="mt-0.5 shrink-0 text-blue-600"
                                    size={21}
                                />

                                <div className="min-w-0">

                                    <p className="text-sm text-gray-500">
                                        Departure Date
                                    </p>

                                    <p className="break-words font-semibold text-gray-900">
                                        {flight.departureDate}
                                    </p>

                                </div>

                            </div>

                            {/* Return Date */}

                            <div className="flex items-start gap-3">

                                <CalendarDays
                                    className="mt-0.5 shrink-0 text-blue-600"
                                    size={21}
                                />

                                <div className="min-w-0">

                                    <p className="text-sm text-gray-500">
                                        Return Date
                                    </p>

                                    <p className="break-words font-semibold text-gray-900">
                                        {flight.returnDate}
                                    </p>

                                </div>

                            </div>

                            {/* Duration */}

                            <div className="flex items-start gap-3">

                                <Clock
                                    className="mt-0.5 shrink-0 text-blue-600"
                                    size={21}
                                />

                                <div className="min-w-0">

                                    <p className="text-sm text-gray-500">
                                        Duration
                                    </p>

                                    <p className="break-words font-semibold text-gray-900">
                                        {flight.duration}
                                    </p>

                                </div>

                            </div>

                            {/* Baggage */}

                            <div className="flex items-start gap-3">

                                <Luggage
                                    className="mt-0.5 shrink-0 text-blue-600"
                                    size={21}
                                />

                                <div className="min-w-0">

                                    <p className="text-sm text-gray-500">
                                        Baggage
                                    </p>

                                    <p className="break-words font-semibold text-gray-900">
                                        {flight.baggage}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ================= INCLUDED ================= */}

                    <div className="mt-8 border-t border-gray-100 pt-8 sm:mt-10">

                        <h3 className="mb-5 text-lg font-bold sm:text-xl">
                            What's Included
                        </h3>

                        <div className="space-y-3">

                            <div className="flex items-start gap-3">

                                <Check
                                    className="mt-0.5 shrink-0 text-green-600"
                                    size={20}
                                />

                                <span className="text-sm leading-6 sm:text-base">
                                    {flight.baggage} checked baggage
                                </span>

                            </div>

                            <div className="flex items-start gap-3">

                                <Check
                                    className="mt-0.5 shrink-0 text-green-600"
                                    size={20}
                                />

                                <span className="text-sm leading-6 sm:text-base">
                                    {flight.class} seating
                                </span>

                            </div>

                            <div className="flex items-start gap-3">

                                <Check
                                    className="mt-0.5 shrink-0 text-green-600"
                                    size={20}
                                />

                                <span className="text-sm leading-6 sm:text-base">
                                    In-flight entertainment
                                </span>

                            </div>

                            <div className="flex items-start gap-3">

                                <Check
                                    className="mt-0.5 shrink-0 text-green-600"
                                    size={20}
                                />

                                <span className="text-sm leading-6 sm:text-base">
                                    Complimentary refreshments
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* ================= BOOK ================= */}

                    <div className="mt-8 flex flex-col gap-6 border-t border-gray-100 pt-8 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <p className="text-sm text-gray-500 sm:text-base">
                                Total from
                            </p>

                            <p className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                                {flight.price}
                            </p>

                            <p className="text-xs text-gray-500 sm:text-sm">
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
                            className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
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