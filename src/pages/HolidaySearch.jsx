import { useLocation } from "react-router-dom";

import {
    MapPin,
    CalendarDays,
    Users,
    Clock,
} from "lucide-react";

import { holidayPackages } from "../constant/tourdata";

import HolidaySearchCard from "../components/HolidaySearchCard";


const HolidaySearch = () => {

    const location = useLocation();

    const searchData = location.state?.searchData;


    console.log("Holiday Packages:", holidayPackages);
    console.log("Search Data:", searchData);


    // =====================================
    // FILTER HOLIDAYS
    // =====================================

    const filteredHolidays = holidayPackages.filter(
        (holiday) => {

            // If there is no search information,
            // show all packages
            if (!searchData) {
                return true;
            }


            // =================================
            // DESTINATION FILTER
            // =================================

            const destinationMatch =
                !searchData.destination ||
                holiday.destination
                    ?.toLowerCase()
                    .includes(
                        searchData.destination.toLowerCase()
                    );


            // =================================
            // DURATION FILTER
            // =================================

            const holidayDuration = parseInt(
                holiday.duration,
                10
            );

            const requestedDuration = parseInt(
                searchData.duration,
                10
            );


            const durationMatch =
                !searchData.duration ||
                holidayDuration >= requestedDuration;


            return (
                destinationMatch &&
                durationMatch
            );
        }
    );


    return (

        <div className="min-h-screen bg-gray-50">

            {/* ================= HERO ================= */}

            <section className="bg-blue-600 px-4 py-10 text-white sm:px-6 sm:py-12 lg:py-14">

                <div className="mx-auto max-w-7xl">

                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Find Your Perfect Holiday
                    </h1>

                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                        Discover amazing destinations and carefully planned
                        holiday experiences.
                    </p>


                    {/* ================= SEARCH SUMMARY ================= */}

                    {searchData && (

                        <div
                            className="
                        mt-7 grid grid-cols-1 gap-5 rounded-2xl
                        bg-white p-4 text-gray-800 shadow-sm
                        sm:grid-cols-2 sm:p-5
                        lg:flex lg:flex-wrap lg:items-center lg:gap-x-8 lg:gap-y-5
                    "
                        >

                            {/* Destination */}

                            {searchData.destination && (

                                <div className="flex min-w-0 items-center gap-3">

                                    <MapPin
                                        className="h-5 w-5 shrink-0 text-blue-600"
                                    />

                                    <div className="min-w-0">

                                        <p className="text-xs text-gray-500">
                                            Destination
                                        </p>

                                        <p className="truncate font-semibold">
                                            {searchData.destination}
                                        </p>

                                    </div>

                                </div>

                            )}


                            {/* Travel Date */}

                            {searchData.travelDate && (

                                <div className="flex min-w-0 items-center gap-3">

                                    <CalendarDays
                                        className="h-5 w-5 shrink-0 text-blue-600"
                                    />

                                    <div className="min-w-0">

                                        <p className="text-xs text-gray-500">
                                            Travel Date
                                        </p>

                                        <p className="truncate font-semibold">
                                            {searchData.travelDate}
                                        </p>

                                    </div>

                                </div>

                            )}


                            {/* Duration */}

                            {searchData.duration && (

                                <div className="flex min-w-0 items-center gap-3">

                                    <Clock
                                        className="h-5 w-5 shrink-0 text-blue-600"
                                    />

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Duration
                                        </p>

                                        <p className="font-semibold">
                                            {searchData.duration} days
                                        </p>

                                    </div>

                                </div>

                            )}


                            {/* Guests */}

                            {searchData.guests && (

                                <div className="flex min-w-0 items-center gap-3">

                                    <Users
                                        className="h-5 w-5 shrink-0 text-blue-600"
                                    />

                                    <div className="min-w-0">

                                        <p className="text-xs text-gray-500">
                                            Guests
                                        </p>

                                        <p className="truncate font-semibold">
                                            {searchData.guests}
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>

                    )}

                </div>

            </section>


            {/* ================= RESULTS ================= */}

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

                <div className="mb-7 sm:mb-8">

                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Holiday Packages
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        {filteredHolidays.length}{" "}
                        {filteredHolidays.length === 1
                            ? "holiday"
                            : "holidays"}{" "}
                        found
                    </p>

                </div>


                {/* ================= RESULTS ================= */}

                {filteredHolidays.length > 0 ? (

                    <div
                        className="
                    grid grid-cols-1 gap-5
                    sm:gap-6
                    md:grid-cols-2
                    lg:grid-cols-3
                "
                    >

                        {filteredHolidays.map((holiday) => (

                            <HolidaySearchCard
                                key={holiday.id}
                                holiday={holiday}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">

                        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
                            No holidays found
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                            Try searching for another destination or changing
                            your duration.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
};


export default HolidaySearch;