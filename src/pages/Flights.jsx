import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
    Plane,
    CalendarDays,
    Users,
    ArrowRightLeft,
} from "lucide-react";

import { flightData } from "../constant/tourData";
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

            <section className="bg-blue-600 text-white px-6 py-12">

                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center gap-3">

                        <Plane size={32} />

                        <h1 className="text-4xl font-bold">
                            Find Your Perfect Flight
                        </h1>

                    </div>

                    <p className="mt-3 text-blue-100 text-lg">
                        Compare flights and find the best option
                        for your journey.
                    </p>


                    {/* Search Summary */}

                    {searchData && (

                        <div className="mt-8 bg-white text-gray-800 rounded-2xl p-5 flex flex-wrap gap-8 items-center">

                            {/* From */}

                            <div className="flex items-center gap-3">

                                <ArrowRightLeft
                                    className="text-blue-600"
                                />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        From
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.from}
                                    </p>

                                </div>

                            </div>


                            {/* To */}

                            <div className="flex items-center gap-3">

                                <Plane
                                    className="text-blue-600"
                                />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        To
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.to}
                                    </p>

                                </div>

                            </div>


                            {/* Departure */}

                            <div className="flex items-center gap-3">

                                <CalendarDays
                                    className="text-blue-600"
                                />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Departure
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.departure}
                                    </p>

                                </div>

                            </div>


                            {/* Return */}

                            <div className="flex items-center gap-3">

                                <CalendarDays
                                    className="text-blue-600"
                                />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Return
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.returnDate || "One way"}
                                    </p>

                                </div>

                            </div>


                            {/* Passengers */}

                            <div className="flex items-center gap-3">

                                <Users
                                    className="text-blue-600"
                                />

                                <div>

                                    <p className="text-xs text-gray-500">
                                        Passengers
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.passengers}
                                    </p>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </section>


            {/* ================= RESULTS ================= */}

            <section className="max-w-7xl mx-auto px-6 py-10">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">

                    <div>

                        <h2 className="text-2xl font-bold text-gray-900">
                            Available Flights
                        </h2>

                        <p className="text-gray-500 mt-1">
                            {sortedFlights.length} flights found
                        </p>

                    </div>


                    {/* Sort */}

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                        className="bg-white border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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


                {/* Flight Cards */}

                {sortedFlights.length > 0 ? (

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {sortedFlights.map((flight) => (

                            <FlightCard
                                key={flight.id}
                                flight={flight}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="bg-white rounded-2xl p-12 text-center">

                        <h3 className="text-2xl font-bold text-gray-800">
                            No flights found
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Try searching for another destination.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
};

export default Flights;