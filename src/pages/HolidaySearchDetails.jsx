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
            <section className="flex min-h-[60vh] items-center justify-center px-5">

                <div className="text-center">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Holiday not found
                    </h1>

                    <p className="mt-3 text-gray-600">
                        The holiday package you're looking for
                        doesn't exist.
                    </p>

                    <Link
                        to="/holiday-search"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
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

        <section className="px-5 py-16 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">


                {/* Back button */}

                <Link
                    to="/holiday-search"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3"
                >
                    <FaArrowLeft size={13} />
                    Back to Search Results
                </Link>


                {/* Hero */}

                <div className="relative h-[400px] overflow-hidden rounded-3xl sm:h-[500px]">

                    <img
                        src={holiday.image}
                        alt={holiday.title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />


                    <div className="absolute bottom-8 left-6 text-white sm:bottom-10 sm:left-10">

                        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                            {holiday.title}
                        </h1>

                        <div className="mt-4 flex flex-wrap gap-5">

                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                <span>
                                    {holiday.destination}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaClock />
                                <span>
                                    {holiday.duration}
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Details */}

                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">


                    {/* Left */}

                    <div>

                        <h2 className="text-2xl font-bold text-gray-900">
                            About This Holiday
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            {holiday.description ||
                                `Enjoy an unforgettable holiday experience in ${holiday.destination}.`}
                        </p>


                        {/* Includes */}

                        {holiday.includes &&
                            holiday.includes.length > 0 && (

                                <div className="mt-8">

                                    <h2 className="text-2xl font-bold text-gray-900">
                                        What's Included
                                    </h2>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                        {holiday.includes.map(
                                            (item) => (

                                                <div
                                                    key={item}
                                                    className="flex items-center gap-3"
                                                >

                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50">

                                                        <FaCheck className="text-sm text-blue-600" />

                                                    </div>

                                                    <span className="text-gray-700">
                                                        {item}
                                                    </span>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>
                            )}

                    </div>


                    {/* Booking Card */}

                    <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                        <p className="text-sm text-gray-500">
                            Starting from
                        </p>

                        <p className="mt-1 text-3xl font-bold text-blue-600">
                            ₦{Number(holiday.price).toLocaleString()}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Per person
                        </p>


                        <button
                            onClick={handleBooking}
                            className="mt-6 w-full rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
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