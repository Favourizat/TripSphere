import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
    Plane,
    CalendarDays,
    Users,
    ArrowRightLeft,
} from "lucide-react";

import { flightData } from "../constant/tourdata";
import FlightCard from "../components/FlightCard";

const Flights = () => {
    const location = useLocation();

    const searchData = location.state?.searchData;

    const [sortBy, setSortBy] = useState("recommended");

    // Filter flights according to search
    const filteredFlights = flightData.filter((flight) => {
        if (!searchData) {
            return true;
        }

        const fromMatch =
            !searchData.from ||
            flight.from
                .toLowerCase()
                .includes(searchData.from.toLowerCase()) ||
            flight.fromCode
                .toLowerCase()
                .includes(searchData.from.toLowerCase());

        const toMatch =
            !searchData.to ||
            flight.to
                .toLowerCase()
                .includes(searchData.to.toLowerCase()) ||
            flight.toCode
                .toLowerCase()
                .includes(searchData.to.toLowerCase());

        return fromMatch && toMatch;
    });

    // Sort flights
    const sortedFlights = [...filteredFlights].sort((a, b) => {
        if (sortBy === "priceLow") {
            return a.price - b.price;
        }

        if (sortBy === "priceHigh") {
            return b.price - a.price;
        }

        if (sortBy === "duration") {
            return parseInt(a.duration) - parseInt(b.duration);
        }

        return 0;
    });

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ================= HERO ================= */}

            <section className="bg-blue-600 px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8">

                <div className="mx-auto w-full max-w-7xl">

                    {/* Hero Heading */}

                    <div className="flex items-start gap-3 sm:items-center">

                        <Plane
                            size={28}
                            className="mt-1 shrink-0 sm:mt-0 sm:h-8 sm:w-8"
                        />

                        <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                            Find Your Perfect Flight
                        </h1>

                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:text-lg">
                        Compare flights and find the best option
                        for your journey.
                    </p>


                    {/* ================= SEARCH SUMMARY ================= */}

                    {searchData && (

                        <div className="mt-8 grid grid-cols-1 gap-5 rounded-2xl bg-white p-5 text-gray-800 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-8">

                            {/* From */}

                            <div className="flex min-w-0 items-center gap-3">

                                <ArrowRightLeft
                                    className="shrink-0 text-blue-600"
                                />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        From
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.from}
                                    </p>

                                </div>

                            </div>


                            {/* To */}

                            <div className="flex min-w-0 items-center gap-3">

                                <Plane
                                    className="shrink-0 text-blue-600"
                                />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        To
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.to}
                                    </p>

                                </div>

                            </div>


                            {/* Departure */}

                            <div className="flex min-w-0 items-center gap-3">

                                <CalendarDays
                                    className="shrink-0 text-blue-600"
                                />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Departure
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.departure}
                                    </p>

                                </div>

                            </div>


                            {/* Return */}

                            <div className="flex min-w-0 items-center gap-3">

                                <CalendarDays
                                    className="shrink-0 text-blue-600"
                                />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Return
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.returnDate || "One way"}
                                    </p>

                                </div>

                            </div>


                            {/* Passengers */}

                            <div className="flex min-w-0 items-center gap-3">

                                <Users
                                    className="shrink-0 text-blue-600"
                                />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Passengers
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.passengers}
                                    </p>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </section>


            {/* ================= RESULTS ================= */}

            <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

                {/* Results Header */}

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Available Flights
                        </h2>

                        <p className="mt-1 text-sm text-gray-500 sm:text-base">
                            {sortedFlights.length} flights found
                        </p>

                    </div>


                    {/* Sort */}

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto sm:min-w-[210px] sm:px-5 sm:text-base"
                    >

                        <option value="recommended">
                            Recommended
                        </option>

                        <option value="priceLow">
                            Price: Low to High
                        </option>

                        <option value="priceHigh">
                            Price: High to Low
                        </option>

                        <option value="duration">
                            Shortest Duration
                        </option>

                    </select>

                </div>


                {/* ================= FLIGHT CARDS ================= */}

                {sortedFlights.length > 0 ? (

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">

                        {sortedFlights.map((flight) => (

                            <FlightCard
                                key={flight.id}
                                flight={flight}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="rounded-2xl bg-white p-8 text-center sm:p-12">

                        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
                            No flights found
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 sm:text-base">
                            Try searching for another destination.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
};

export default Flights;