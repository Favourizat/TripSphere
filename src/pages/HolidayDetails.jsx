import { useParams, Link, useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaArrowLeft,
} from "react-icons/fa";

import { holidayPackages } from "../constant/tourdata";

const HolidayDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the selected holiday package
  const holiday = holidayPackages.find(
    (item) => item.id === Number(id)
  );

  // If package doesn't exist
  if (!holiday) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-lg text-center">

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Holiday package not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            The holiday package you're looking for doesn't exist.
          </p>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-6 sm:text-base"
          >
            <FaArrowLeft size={13} />
            Back to Services
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= BACK BUTTON ================= */}

        <Link
          to="/services"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 sm:mb-8"
        >
          <FaArrowLeft size={13} />
          Back to Holiday Packages
        </Link>


        {/* ================= HERO ================= */}

        <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[450px] sm:rounded-3xl md:h-[500px]">

          {/* Image */}

          <img
            src={holiday.image}
            alt={holiday.title}
            className="h-full w-full object-cover"
          />


          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />


          {/* Category */}

          <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-600 shadow-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-sm">
            {holiday.category}
          </span>


          {/* Hero Content */}

          <div className="absolute bottom-6 left-4 right-4 text-white sm:bottom-10 sm:left-8 sm:right-8 lg:left-10">

            <h1 className="break-words text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {holiday.title}
            </h1>


            <div className="mt-3 flex flex-col gap-2 text-sm sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-5 sm:text-base">

              {/* Destination */}

              <div className="flex min-w-0 items-center gap-2">
                <FaMapMarkerAlt className="shrink-0" />

                <span className="break-words">
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

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-10">


          {/* ================= INCLUDES ================= */}

          <div className="min-w-0">

            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              What's Included
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Enjoy a carefully planned holiday experience with everything
              you need for a comfortable and memorable trip.
            </p>


            {/* Includes */}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {holiday.includes.map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-3"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <FaCheck className="text-sm text-blue-600" />
                  </div>

                  <span className="break-words text-sm text-gray-700 sm:text-base">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* ================= BOOKING ================= */}

          <div className="h-fit rounded-2xl border border-gray-200 p-5 shadow-sm sm:p-6">

            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <p className="mt-1 break-words text-2xl font-bold text-blue-600 sm:text-3xl">
              {holiday.price.toLocaleString()}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Per person
            </p>


            <button
              onClick={() => navigate(`/book-holiday/${holiday.id}`)}
              className="mt-5 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Book This Holiday
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HolidayDetails;