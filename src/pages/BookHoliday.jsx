import { useParams } from "react-router-dom";
import { holidayPackages } from "../constant/tourdata";

import BookingForm from "../components/BookingForm";
import BookingSummary from "../components/BookingSummary";

const BookHoliday = () => {
    const { id } = useParams();

    const holiday = holidayPackages.find(
        (item) => item.id === Number(id)
    );

    if (!holiday) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Holiday Package Not Found
                    </h1>

                    <p className="mt-3 text-sm text-gray-600 sm:text-base">
                        The holiday package you're looking for doesn't exist.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-slate-50 py-10 sm:py-12 lg:py-16">

            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Heading */}

                <div className="mb-8 text-center sm:mb-10 lg:mb-12">

                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 sm:text-base">
                        Book Your Holiday
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
                        Complete Your Booking
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        Fill in your details and our travel team will
                        get back to you to confirm your booking.
                    </p>

                </div>

                {/* Booking */}

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

                    <BookingForm
                        item={holiday}
                        type="holiday"
                    />

                    <BookingSummary
                        item={holiday}
                    />

                </div>

            </div>

        </section>
    );
};

export default BookHoliday;