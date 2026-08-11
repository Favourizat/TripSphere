
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
    const [visibleCount, setVisibleCount] = useState(4)

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
    const displayedPackages = filteredPackages.slice(0, visibleCount)

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }

    return (
        <section className="px-6 py-16 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mb-10 max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Explore & Experience
                    </p>

                    <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                        Explore Holiday Packages
                    </h1>

                    <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                        Take the stress out of planning with carefully curated holiday
                        packages designed around unforgettable destinations, exciting
                        experiences, and comfortable stays. Whether you're looking for a
                        relaxing beach escape, an adventurous getaway, or a luxury city
                        break, discover a package that fits your travel style and budget.
                    </p>
                </div>

                {/* ================= DESTINATION FILTER ================= */}
                <div className="mb-12 text-center">
                    {/* Filter Heading */}
                    <div className="mb-5">
                        <p className="text-3xl font-bold text-gray-900">
                            Explore by Destination
                        </p>

                        <div className="mx-auto mt-5 h-1 w-36 rounded-full bg-blue-600"></div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {destinations.slice(0, 6).map((destination) => (
                            <button
                                key={destination}
                                onClick={() => setSelectedDestination(destination)}
                                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${selectedDestination === destination
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
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            {selectedDestination === "All"
                                ? "All Holiday Packages"
                                : `${selectedDestination} Holiday Packages`}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            {filteredPackages.length} packages available
                        </p>
                    </div>
                </div>

                {/* ================= PACKAGES ================= */}
                <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">

                    {displayedPackages.map((holiday) => (
                        <div
                            key={holiday.id}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden rounded-3xl sm:h-80">

                                <img
                                    src={holiday.image}
                                    alt={holiday.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                {/* Category */}
                                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-600 shadow-md">
                                    {holiday.category}
                                </span>

                                {/* Price */}
                                <div className="absolute bottom-5 right-5 rounded-xl bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                    <p className="text-xs text-gray-500">
                                        Starting from
                                    </p>

                                    <p className="text-lg font-bold text-blue-600">
                                        {holiday.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="pt-6">

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                                    {holiday.title}
                                </h3>

                                {/* Location & Duration */}
                                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">

                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-blue-500" />
                                        <span>{holiday.destination}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-blue-500" />
                                        <span>{holiday.duration}</span>
                                    </div>

                                </div>

                                {/* CTA */}
                                <Link
                                    to={`/holidays/${holiday.id}`}
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
                                >
                                    View Package
                                    <FaArrowRight size={13} />
                                </Link>

                            </div>
                        </div>
                    ))}


                </div>

                {/* Load More */}

                {visibleCount < filteredPackages.length && (
                    <div className="relative left-1/2 mt-16 flex -translate-x-1/2 justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 hover:text-white cursor-pointer"
                        >
                            Load More Packages
                        </button>
                    </div>

                )}


                {/* Empty State */}
                {filteredPackages.length === 0 && (
                    <div className="py-16 text-center">
                        <h3 className="text-xl font-bold text-gray-900">
                            No packages found
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Try selecting another destination.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Holiday;