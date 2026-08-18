import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    SlidersHorizontal,
    MapPin,
    CalendarDays,
    Users,
    ChevronDown,
} from "lucide-react";

import { hotelData } from "../constant/tourdata";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
    // Get the search information passed from BookingSection
    const location = useLocation();
    const searchData = location.state?.searchData;

    // Filter states
    const [maxPrice, setMaxPrice] = useState(300);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState("recommended");
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    // Handle amenity checkbox
    const handleAmenityChange = (amenity) => {
        setSelectedAmenities((prev) => {
            if (prev.includes(amenity)) {
                return prev.filter((item) => item !== amenity);
            }

            return [...prev, amenity];
        });
    };

    // Filter hotels
    const filteredHotels = hotelData
        .filter((hotel) => {
            if (!searchData?.destination) {
                return true;
            }

            return hotel.location
                .toLowerCase()
                .includes(searchData.destination.toLowerCase());
        })
        .filter((hotel) => hotel.price <= maxPrice)
        .filter((hotel) => hotel.rating >= minRating)
        .filter((hotel) => {
            if (selectedAmenities.length === 0) {
                return true;
            }

            return selectedAmenities.every((amenity) =>
                hotel.amenities.includes(amenity)
            );
        });

    // Sort hotels
    const sortedHotels = [...filteredHotels].sort((a, b) => {
        if (sortBy === "priceLow") {
            return a.price - b.price;
        }

        if (sortBy === "priceHigh") {
            return b.price - a.price;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    // Clear all filters
    const clearFilters = () => {
        setMaxPrice(300);
        setMinRating(0);
        setSelectedAmenities([]);
        setSortBy("recommended");
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-gray-50">

            {/* ================= HERO ================= */}

            <section className="bg-blue-600 px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14">

                <div className="mx-auto max-w-7xl">

                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Find Your Perfect Stay
                    </h1>

                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
                        Discover comfortable hotels that match your
                        destination, budget and travel preferences.
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

                            <div className="flex min-w-0 items-center gap-3">

                                <MapPin className="h-5 w-5 shrink-0 text-blue-600" />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Destination
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.destination || "Any destination"}
                                    </p>

                                </div>

                            </div>


                            {/* Check-in */}

                            <div className="flex min-w-0 items-center gap-3">

                                <CalendarDays className="h-5 w-5 shrink-0 text-blue-600" />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Check-in
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.checkIn || "Not selected"}
                                    </p>

                                </div>

                            </div>


                            {/* Check-out */}

                            <div className="flex min-w-0 items-center gap-3">

                                <CalendarDays className="h-5 w-5 shrink-0 text-blue-600" />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Check-out
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.checkOut || "Not selected"}
                                    </p>

                                </div>

                            </div>


                            {/* Guests */}

                            <div className="flex min-w-0 items-center gap-3">

                                <Users className="h-5 w-5 shrink-0 text-blue-600" />

                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500">
                                        Guests
                                    </p>

                                    <p className="truncate font-semibold">
                                        {searchData.guests || "Not selected"}
                                    </p>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </section>


            {/* ================= MAIN ================= */}

            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

                <div className="flex flex-col gap-8 lg:flex-row">


                    {/* ================= FILTER SIDEBAR ================= */}

                    <aside className="h-fit w-full rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:w-72 lg:shrink-0">

                        {/* Filter Header */}

                        <div className="flex items-center justify-between gap-4">

                            <div className="flex items-center gap-2">

                                <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                                    Filters
                                </h2>

                                <SlidersHorizontal
                                    size={19}
                                    className="shrink-0 text-blue-600"
                                />

                            </div>

                            <button
                                onClick={clearFilters}
                                className="shrink-0 text-xs font-medium text-blue-600 hover:underline sm:text-sm"
                            >
                                Clear all
                            </button>

                        </div>


                        {/* ================= PRICE ================= */}

                        <div className="mt-7 sm:mt-8">

                            <div className="flex items-center justify-between gap-4">

                                <h3 className="text-sm font-semibold sm:text-base">
                                    Price per night
                                </h3>

                                <span className="text-sm font-semibold text-blue-600">
                                    ${maxPrice}
                                </span>

                            </div>

                            <input
                                type="range"
                                min="50"
                                max="500"
                                value={maxPrice}
                                onChange={(e) =>
                                    setMaxPrice(Number(e.target.value))
                                }
                                className="mt-4 w-full accent-blue-600"
                            />

                            <div className="mt-2 flex justify-between text-xs text-gray-500 sm:text-sm">
                                <span>$50</span>
                                <span>$500</span>
                            </div>

                        </div>


                        {/* ================= RATING ================= */}

                        <div className="mt-7 sm:mt-8">

                            <h3 className="mb-4 text-sm font-semibold sm:text-base">
                                Guest Rating
                            </h3>

                            {[4, 4.5, 5].map((rating) => (

                                <label
                                    key={rating}
                                    className="mb-3 flex cursor-pointer items-center gap-3"
                                >

                                    <input
                                        type="radio"
                                        name="rating"
                                        checked={minRating === rating}
                                        onChange={() =>
                                            setMinRating(rating)
                                        }
                                        className="h-4 w-4 accent-blue-600"
                                    />

                                    <span className="text-sm text-gray-600">
                                        {rating}+ ⭐
                                    </span>

                                </label>

                            ))}

                            {minRating > 0 && (

                                <button
                                    onClick={() => setMinRating(0)}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Clear rating
                                </button>

                            )}

                        </div>


                        {/* ================= AMENITIES ================= */}

                        <div className="mt-7 sm:mt-8">

                            <h3 className="mb-4 text-sm font-semibold sm:text-base">
                                Amenities
                            </h3>

                            {[
                                "Free WiFi",
                                "Breakfast",
                                "Swimming Pool",
                                "Gym",
                                "Spa",
                            ].map((amenity) => (

                                <label
                                    key={amenity}
                                    className="mb-3 flex cursor-pointer items-center gap-3"
                                >

                                    <input
                                        type="checkbox"
                                        checked={selectedAmenities.includes(
                                            amenity
                                        )}
                                        onChange={() =>
                                            handleAmenityChange(amenity)
                                        }
                                        className="h-4 w-4 shrink-0 accent-blue-600"
                                    />

                                    <span className="text-sm text-gray-600">
                                        {amenity}
                                    </span>

                                </label>

                            ))}

                        </div>

                    </aside>


                    {/* ================= RESULTS ================= */}

                    <div className="min-w-0 flex-1">


                        {/* Results Header */}

                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                                    Hotels
                                </h2>

                                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                                    {sortedHotels.length} properties found
                                </p>

                            </div>


                            {/* Sort */}

                            <div className="relative w-full sm:w-auto">

                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                    className="
                                        w-full appearance-none rounded-xl
                                        border border-gray-200 bg-white
                                        px-4 py-3 pr-10 text-sm outline-none
                                        focus:ring-2 focus:ring-blue-500
                                        sm:w-auto sm:min-w-[190px]
                                    "
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

                                    <option value="rating">
                                        Highest Rated
                                    </option>

                                </select>

                                <ChevronDown
                                    size={18}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                            </div>

                        </div>


                        {/* ================= HOTEL RESULTS ================= */}

                        {sortedHotels.length > 0 ? (

                            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">

                                {sortedHotels.map((hotel) => (

                                    <HotelCard
                                        key={hotel.id}
                                        hotel={hotel}
                                    />

                                ))}

                            </div>

                        ) : (

                            /* No hotels */

                            <div className="rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">

                                <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
                                    No hotels found
                                </h3>

                                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                                    Try changing your destination or filters.
                                </p>

                                <button
                                    onClick={clearFilters}
                                    className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
                                >
                                    Clear Filters
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Hotels;