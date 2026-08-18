import { useParams, useNavigate, Link } from "react-router-dom";

import {
    FaMapMarkerAlt,
    FaClock,
    FaCheck,
    FaArrowLeft,
} from "react-icons/fa";

import { holidayPackages } from "../constant/tourdata";


const HolidaySearchDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();


    // Find selected holiday
    const holiday = holidayPackages.find(
        (item) => item.id === Number(id)
    );


    // If holiday doesn't exist
    if (!holiday) {
        return (
            <section className="flex min-h-[60vh] items-center justify-center px-4 sm:px-6">

                <div className="w-full max-w-md text-center">

                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Holiday not found
                    </h1>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                        The holiday package you're looking for
                        doesn't exist.
                    </p>

                    <Link
                        to="/holiday-search"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-6 sm:text-base"
                    >
                        <FaArrowLeft size={13} />
                        Back to Holidays
                    </Link>

                </div>

            </section>
        );
    }


    // Send holiday information to Contact page
    const handleBooking = () => {

        navigate("/contact", {
            state: {
                holiday: holiday,
            },
        });

    };


    return (

        <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

            <div className="mx-auto max-w-7xl">


                {/* ================= BACK BUTTON ================= */}

                <Link
                    to="/holiday-search"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3 sm:mb-8"
                >
                    <FaArrowLeft size={13} />
                    Back to Search Results
                </Link>


                {/* ================= HERO ================= */}

                <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[450px] sm:rounded-3xl lg:h-[500px]">

                    <img
                        src={holiday.image}
                        alt={holiday.title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />


                    {/* Hero Content */}

                    <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-10 sm:left-8 sm:right-8 lg:left-10">

                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
                            {holiday.title}
                        </h1>


                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm sm:mt-4 sm:text-base">

                            {/* Destination */}

                            <div className="flex min-w-0 items-center gap-2">

                                <FaMapMarkerAlt className="shrink-0" />

                                <span className="truncate">
                                    {holiday.destination}
                                </span>

                            </div>


                            {/* Duration */}

                            <div className="flex items-center gap-2">

                                <FaClock className="shrink-0" />

                                <span>
                                    {holiday.duration}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= DETAILS ================= */}

                <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_350px]">


                    {/* ================= LEFT CONTENT ================= */}

                    <div className="min-w-0">

                        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            About This Holiday
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                            {holiday.description ||
                                `Enjoy an unforgettable holiday experience in ${holiday.destination}.`}
                        </p>


                        {/* ================= INCLUDES ================= */}

                        {holiday.includes &&
                            holiday.includes.length > 0 && (

                                <div className="mt-8 sm:mt-10">

                                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                        What's Included
                                    </h2>

                                    <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">

                                        {holiday.includes.map(
                                            (item) => (

                                                <div
                                                    key={item}
                                                    className="flex items-start gap-3"
                                                >

                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50">

                                                        <FaCheck className="text-sm text-blue-600" />

                                                    </div>

                                                    <span className="pt-1 text-sm leading-6 text-gray-700 sm:text-base">
                                                        {item}
                                                    </span>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>

                            )}

                    </div>


                    {/* ================= BOOKING CARD ================= */}

                    <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">

                        <p className="text-sm text-gray-500">
                            Starting from
                        </p>

                        <p className="mt-1 text-2xl font-bold text-blue-600 sm:text-3xl">
                            {Number(holiday.price).toLocaleString()}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Per person
                        </p>


                        <button
                            onClick={handleBooking}
                            className="mt-6 w-full rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
                        >
                            Book This Holiday
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default HolidaySearchDetails;