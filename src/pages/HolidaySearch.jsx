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

            <section className="bg-blue-600 px-6 py-12 text-white">

                <div className="mx-auto max-w-7xl">

                    <h1 className="text-4xl font-bold">
                        Find Your Perfect Holiday
                    </h1>

                    <p className="mt-3 max-w-2xl text-lg text-blue-100">
                        Discover amazing destinations and carefully
                        planned holiday experiences.
                    </p>


                    {/* ================= SEARCH SUMMARY ================= */}

                    {searchData && (

                        <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl bg-white p-5 text-gray-800">


                            {/* Destination */}

                            {searchData.destination && (

                                <div className="flex items-center gap-3">

                                    <MapPin className="text-blue-600" />

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Destination
                                        </p>

                                        <p className="font-semibold">
                                            {searchData.destination}
                                        </p>

                                    </div>

                                </div>

                            )}


                            {/* Travel Date */}

                            {searchData.travelDate && (

                                <div className="flex items-center gap-3">

                                    <CalendarDays className="text-blue-600" />

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Travel Date
                                        </p>

                                        <p className="font-semibold">
                                            {searchData.travelDate}
                                        </p>

                                    </div>

                                </div>

                            )}


                            {/* Duration */}

                            {searchData.duration && (

                                <div className="flex items-center gap-3">

                                    <Clock className="text-blue-600" />

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

                                <div className="flex items-center gap-3">

                                    <Users className="text-blue-600" />

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Guests
                                        </p>

                                        <p className="font-semibold">
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

            <section className="mx-auto max-w-7xl px-6 py-12">


                <div className="mb-8">

                    <h2 className="text-2xl font-bold text-gray-900">
                        Holiday Packages
                    </h2>

                    <p className="mt-2 text-gray-500">
                        {filteredHolidays.length}{" "}
                        {filteredHolidays.length === 1
                            ? "holiday"
                            : "holidays"}{" "}
                        found
                    </p>

                </div>


                {/* ================= RESULTS ================= */}

                {filteredHolidays.length > 0 ? (

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {filteredHolidays.map(
                            (holiday) => (

                                <HolidaySearchCard
                                    key={holiday.id}
                                    holiday={holiday}
                                />

                            )
                        )}

                    </div>

                ) : (

                    <div className="rounded-2xl bg-white p-12 text-center shadow-sm">

                        <h3 className="text-2xl font-bold text-gray-800">
                            No holidays found
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Try searching for another destination
                            or changing your duration.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
};


export default HolidaySearch;