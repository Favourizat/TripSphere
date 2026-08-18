import { FaGlobeAfrica, FaMapMarkedAlt } from "react-icons/fa";
import { MdAutoAwesome, MdOutlinePayments } from "react-icons/md";

const How = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Simple & Seamless
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            How TripSphere Works
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
            From discovering your destination to enjoying your journey,
            TripSphere makes every step simple, secure, and stress-free.
          </p>
        </div>

        {/* W Layout */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-4 md:gap-6 lg:gap-8">

          {/* 01 */}
          <div className="group">
            <FaGlobeAfrica
              className="mb-5 rounded-full bg-blue-200 p-4 text-[68px] text-blue-400 transition-transform duration-300 group-hover:translate-x-2 sm:text-[72px]"
            />

            <h3 className="mb-3 text-lg font-bold leading-7 text-gray-900 sm:text-xl">
              01. Discover Your Journey
            </h3>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Tell us where you’re going, when you’re traveling, and what you
              need. Explore flights, hotels, transport, and holiday experiences
              tailored to your trip.
            </p>
          </div>

          {/* 02 */}
          <div className="group md:mt-20 lg:mt-28">
            <FaMapMarkedAlt
              className="mb-5 rounded-full bg-blue-200 p-4 text-[68px] text-blue-400 transition-transform duration-300 group-hover:translate-x-2 sm:text-[72px]"
            />

            <h3 className="mb-3 text-lg font-bold leading-7 text-gray-900 sm:text-xl">
              02. Find What Fits
            </h3>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Compare your options by price, location, ratings, and features
              to find the perfect match for your travel plans and budget.
            </p>
          </div>

          {/* 03 */}
          <div className="group">
            <MdAutoAwesome
              className="mb-5 rounded-full bg-blue-200 p-4 text-[68px] text-blue-400 transition-transform duration-300 group-hover:rotate-12 sm:text-[72px]"
            />

            <h3 className="mb-3 text-lg font-bold leading-7 text-gray-900 sm:text-xl">
              03. Book With Confidence
            </h3>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Choose your preferred option and complete your booking through a
              simple, secure, and transparent checkout process.
            </p>
          </div>

          {/* 04 */}
          <div className="group md:mt-20 lg:mt-28">
            <MdOutlinePayments
              className="mb-5 rounded-full bg-blue-200 p-4 text-[68px] text-blue-400 transition-transform duration-300 group-hover:scale-110 sm:text-[72px]"
            />

            <h3 className="mb-3 text-lg font-bold leading-7 text-gray-900 sm:text-xl">
              04. Travel With Ease
            </h3>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Receive your booking confirmation and itinerary, keep everything
              organized in one place, and enjoy a smoother journey from start
              to finish.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default How;