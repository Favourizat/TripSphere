
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
            // If there is no destination search,
            // show all hotels
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
            // If no amenities are selected,
            // don't filter by amenities
            if (selectedAmenities.length === 0) {
                return true;
            }

            // Hotel must have ALL selected amenities
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

        // Recommended
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
        <div className="min-h-screen bg-gray-50">

            {/* ================= HERO ================= */}
            <section className="bg-blue-600 text-white px-6 py-12">

                <div className="max-w-7xl mx-auto">

                    <h1 className="text-4xl font-bold">
                        Find Your Perfect Stay
                    </h1>

                    <p className="mt-3 text-blue-100 text-lg">
                        Discover comfortable hotels that match your
                        destination, budget and travel preferences.
                    </p>

                    {/* Search Summary */}
                    {searchData && (
                        <div className="mt-8 bg-white text-gray-800 rounded-2xl p-5 flex flex-wrap gap-6 items-center">

                            {/* Destination */}
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

                            {/* Check-in */}
                            <div className="flex items-center gap-3">
                                <CalendarDays className="text-blue-600" />

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Check-in
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.checkIn}
                                    </p>
                                </div>
                            </div>

                            {/* Check-out */}
                            <div className="flex items-center gap-3">
                                <CalendarDays className="text-blue-600" />

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Check-out
                                    </p>

                                    <p className="font-semibold">
                                        {searchData.checkOut}
                                    </p>
                                </div>
                            </div>

                            {/* Guests */}
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

                        </div>
                    )}

                </div>
            </section>


            {/* ================= MAIN ================= */}
            <section className="max-w-7xl mx-auto px-6 py-10">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* ================= FILTER SIDEBAR ================= */}
                    <aside className="lg:w-72 bg-white rounded-2xl p-6 shadow-sm h-fit">

                        {/* Filter Header */}
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Filters
                                </h2>

                                <SlidersHorizontal
                                    size={20}
                                    className="text-blue-600"
                                />
                            </div>

                            <button
                                onClick={clearFilters}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Clear all
                            </button>

                        </div>


                        {/* ================= PRICE ================= */}
                        <div className="mt-8">

                            <div className="flex justify-between">

                                <h3 className="font-semibold">
                                    Price per night
                                </h3>

                                <span className="text-blue-600 font-semibold">
                                    {maxPrice}
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
                                className="w-full mt-4 accent-blue-600"
                            />

                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                                <span>$50</span>
                                <span>$500</span>
                            </div>

                        </div>


                        {/* ================= RATING ================= */}
                        <div className="mt-8">

                            <h3 className="font-semibold mb-4">
                                Guest Rating
                            </h3>

                            {[4, 4.5, 5].map((rating) => (
                                <label
                                    key={rating}
                                    className="flex items-center gap-3 mb-3 cursor-pointer"
                                >

                                    <input
                                        type="radio"
                                        name="rating"
                                        checked={minRating === rating}
                                        onChange={() =>
                                            setMinRating(rating)
                                        }
                                        className="accent-blue-600"
                                    />

                                    <span className="text-gray-600">
                                        {rating}+ ⭐
                                    </span>

                                </label>
                            ))}

                            {/* Clear rating */}
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
                        <div className="mt-8">

                            <h3 className="font-semibold mb-4">
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
                                    className="flex items-center gap-3 mb-3 cursor-pointer"
                                >

                                    <input
                                        type="checkbox"
                                        checked={selectedAmenities.includes(
                                            amenity
                                        )}
                                        onChange={() =>
                                            handleAmenityChange(amenity)
                                        }
                                        className="w-4 h-4 accent-blue-600"
                                    />

                                    <span className="text-gray-600 text-sm">
                                        {amenity}
                                    </span>

                                </label>

                            ))}

                        </div>

                    </aside>


                    {/* ================= RESULTS ================= */}
                    <div className="flex-1">

                        {/* Results Header */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">

                            <div>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Hotels
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    {sortedHotels.length} properties found
                                </p>

                            </div>


                            {/* Sort */}
                            <div className="relative">

                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                    className="appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
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
                                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                                />

                            </div>

                        </div>


                        {/* ================= HOTEL RESULTS ================= */}

                        {sortedHotels.length > 0 ? (

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {sortedHotels.map((hotel) => (

                                    <HotelCard
                                        key={hotel.id}
                                        hotel={hotel}
                                    />

                                ))}

                            </div>

                        ) : (

                            /* No hotels */
                            <div className="bg-white rounded-2xl p-12 text-center">

                                <h3 className="text-2xl font-bold text-gray-800">
                                    No hotels found
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Try changing your destination or filters.
                                </p>

                                <button
                                    onClick={clearFilters}
                                    className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
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