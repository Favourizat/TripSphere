
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import {
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaArrowLeft,
} from "react-icons/fa";

import { holidayPackages} from "../constant/tourdata";

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
      <section className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Holiday package not found
          </h1>

          <p className="mt-3 text-gray-600">
            The holiday package you're looking for doesn't exist.
          </p>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaArrowLeft size={13} />
            Back to Services
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= BACK BUTTON ================= */}

        <Link
          to="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
        >
          <FaArrowLeft size={13} />
          Back to Holiday Packages
        </Link>

        {/* ================= HERO ================= */}

        <div className="relative h-[400px] overflow-hidden rounded-3xl sm:h-[500px]">

          {/* Image */}
          <img
            src={holiday.image}
            alt={holiday.title}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category */}
          <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wide text-blue-600 shadow-md">
            {holiday.category}
          </span>

          {/* Hero Content */}
          <div className="absolute bottom-8 left-6 text-white sm:bottom-10 sm:left-10">

            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              {holiday.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-5">

              {/* Destination */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{holiday.destination}</span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{holiday.duration}</span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DETAILS ================= */}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">

          {/* Includes */}
          <div>

            <h2 className="text-2xl font-bold text-gray-900">
              What's Included
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Enjoy a carefully planned holiday experience with everything
              you need for a comfortable and memorable trip.
            </p>

            {/* Includes */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {holiday.includes.map((item) => (
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
              ))}

            </div>
          </div>

          {/* ================= BOOKING ================= */}

          <div className="h-fit rounded-2xl border border-gray-200 p-6 shadow-sm">

            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <p className="mt-1 text-3xl font-bold text-blue-600">
              ₦{holiday.price.toLocaleString()}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Per person
            </p>

            <button
              className="mt-6 w-full rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              onClick={() =>
                navigate("/contact", {
                  state: {
                    bookingType: "holiday",
                    holiday: holiday,
                  },
                })
              }
            >
              Book This Package
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HolidayDetails;
