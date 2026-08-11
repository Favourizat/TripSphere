
import {
  FaPlane,
  FaHotel,
  FaBus,
  FaUmbrellaBeach,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import FlightImage from "../../assets/FlightImage.avif";
import HotelImage from "../../assets/HotelImage.avif";
import TrainImage from "../../assets/TrainImage.avif";
import HolidayImage from "../../assets/HolidayImage.avif";

const services = [
  {
    image: FlightImage,
    icon: FaPlane,
    title: "Flight Booking",
    description:
      "Find and compare flights from different destinations and choose the option that works best for your journey.",
    features: [
      "Compare flight fares",
      "Flexible travel dates",
      "Multiple airlines",
    ],
    link: "Explore Flights",
    path: "/flights",
  },

  {
    image: HotelImage,
    icon: FaHotel,
    title: "Hotel Booking",
    description:
      "Discover comfortable stays that match your destination, budget, and travel preferences.",
    features: [
      "Compare hotel prices",
      "Guest ratings and reviews",
      "Hotel amenities",
    ],
    link: "Find a Hotel",
    path: "/hotels",
  },

  {
    image: TrainImage,
    icon: FaBus,
    title: "Bus & Train",
    description:
      "Find convenient and affordable transportation options for journeys within and between destinations.",
    features: [
      "Compare transport options",
      "Departure schedules",
      "Seat availability",
    ],
    link: "Find Transport",
    path: "/transport",
  },

  {
    image: HolidayImage,
    icon: FaUmbrellaBeach,
    title: "Holiday Packages",
    description:
      "Discover unforgettable holiday experiences tailored to your destination, budget, and travel style.",
    features: [
      "Curated holiday packages",
      "Exciting activities & experiences",
      "Accommodation & travel included",
    ],
    link: "Explore Holidays",
    path: "/holidays",
  },
];

const CoreServices = () => {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What We Offer
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Our Core Services
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything you need to plan, book, and enjoy your journey,
            conveniently brought together in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className="group">

                {/* Service Image */}
                <div className="relative mb-7 h-72 overflow-hidden rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
                    <Icon className="text-xl text-blue-600" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 max-w-xl leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-7 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <FaCheck className="shrink-0 text-sm text-blue-500" />

                      <span className="text-sm text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
                >
                  {service.link}

                  <FaArrowRight size={14} />
                </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;