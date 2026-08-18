import { useParams } from "react-router-dom";
import { tourdata } from "../constant/tourdata";

import BookingForm from "../components/BookingForm";
import BookingSummary from "../components/BookingSummary";

const Bookt = () => {
    const { id } = useParams();

    const tour = tourdata.find(
        (item) => item.id === Number(id)
    );

    if (!tour) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-16 sm:px-6 lg:px-8">
                <div className="w-full max-w-lg text-center">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Tour Not Found
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                        The tour you're looking for doesn't exist.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

            <div className="mx-auto w-full max-w-6xl">

                {/* ================= HEADING ================= */}

                <div className="mb-10 text-center sm:mb-12">

                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                        Book Your Tour
                    </p>

                    <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Complete Your Booking
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        Fill in your details and our travel team will
                        get back to you to confirm your booking.
                    </p>

                </div>

                {/* ================= BOOKING ================= */}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {/* Booking Form */}

                    <BookingForm
                        item={tour}
                        type="tour"
                    />

                    {/* Booking Summary */}

                    <BookingSummary
                        item={tour}
                    />

                </div>

            </div>

        </section>
    );
};

export default Bookt;