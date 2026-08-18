import {
    FaMapMarkerAlt,
    FaClock,
    FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { holidayPackages } from "../../constant/tourdata";
import { useState } from "react";

const Holiday = () => {
    const [selectedDestination, setSelectedDestination] = useState("All");
    const [visibleCount, setVisibleCount] = useState(4);

    const destinations = [
        "All",
        "Dubai",
        "Zanzibar",
        "Paris",
        "Cape Town",
    ];

    const filteredPackages =
        selectedDestination === "All"
            ? holidayPackages
            : holidayPackages.filter((holiday) =>
                holiday.destination.includes(selectedDestination)
            );

    const displayedPackages = filteredPackages.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mb-10 max-w-3xl sm:mb-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                        Explore & Experience
                    </p>

                    <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                        Explore Holiday Packages
                    </h1>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
                        Take the stress out of planning with carefully curated holiday
                        packages designed around unforgettable destinations, exciting
                        experiences, and comfortable stays. Whether you're looking for a
                        relaxing beach escape, an adventurous getaway, or a luxury city
                        break, discover a package that fits your travel style and budget.
                    </p>
                </div>

                {/* ================= DESTINATION FILTER ================= */}
                <div className="mb-10 text-center sm:mb-12">

                    {/* Filter Heading */}
                    <div className="mb-5 sm:mb-6">
                        <p className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                            Explore by Destination
                        </p>

                        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600 sm:mt-5 sm:w-36"></div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                        {destinations.map((destination) => (
                            <button
                                key={destination}
                                onClick={() => {
                                    setSelectedDestination(destination);
                                    setVisibleCount(4);
                                }}
                                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                                    selectedDestination === destination
                                        ? "border-blue-600 bg-blue-600 text-white shadow-md"
                                        : "border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                }`}
                            >
                                {destination}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= RESULTS ================= */}
                <div className="mb-7 sm:mb-8">
                    <div>
                        <h2 className="text-lg font-bold leading-6 text-gray-900 sm:text-xl">
                            {selectedDestination === "All"
                                ? "All Holiday Packages"
                                : `${selectedDestination} Holiday Packages`}
                        </h2>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                            {filteredPackages.length} packages available
                        </p>
                    </div>
                </div>

                {/* ================= PACKAGES ================= */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:gap-x-16">

                    {displayedPackages.map((holiday) => (
                        <div
                            key={holiday.id}
                            className="group min-w-0"
                        >

                            {/* Image */}
                            <div className="relative h-60 overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl md:h-64 lg:h-72">

                                <img
                                    src={holiday.image}
                                    alt={holiday.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                {/* Category */}
                                <span className="absolute left-3 top-3 max-w-[60%] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-blue-600 shadow-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                                    {holiday.category}
                                </span>

                                {/* Price */}
                                <div className="absolute bottom-3 right-3 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:bottom-5 sm:right-5 sm:px-4 sm:py-3">
                                    <p className="text-[10px] text-gray-500 sm:text-xs">
                                        Starting from
                                    </p>

                                    <p className="text-base font-bold text-blue-600 sm:text-lg">
                                        {holiday.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="pt-5 sm:pt-6">

                                {/* Title */}
                                <h3 className="text-xl font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
                                    {holiday.title}
                                </h3>

                                {/* Location & Duration */}
                                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 sm:gap-x-5 sm:text-sm">

                                    <div className="flex min-w-0 items-center gap-2">
                                        <FaMapMarkerAlt className="shrink-0 text-blue-500" />
                                        <span className="break-words">
                                            {holiday.destination}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaClock className="shrink-0 text-blue-500" />
                                        <span>{holiday.duration}</span>
                                    </div>

                                </div>

                                {/* CTA */}
                                <Link
                                    to={`/holidays/${holiday.id}`}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 sm:mt-6 sm:text-base"
                                >
                                    View Package
                                    <FaArrowRight size={12} />
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>

                {/* Load More */}
                {visibleCount < filteredPackages.length && (
                    <div className="mt-12 flex justify-center sm:mt-16">
                        <button
                            onClick={handleLoadMore}
                            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto sm:text-base"
                        >
                            Load More Packages
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {filteredPackages.length === 0 && (
                    <div className="py-12 text-center sm:py-16">
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            No packages found
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 sm:text-base">
                            Try selecting another destination.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Holiday;