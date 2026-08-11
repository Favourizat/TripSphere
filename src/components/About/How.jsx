import { FaGlobeAfrica, FaMapMarkedAlt } from "react-icons/fa";
import { MdAutoAwesome, MdOutlinePayments } from "react-icons/md";

const How = () => {
  return (
    <section className="py-15 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Simple & Seamless
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How TripSphere Works
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            From discovering your destination to enjoying your journey,
            TripSphere makes every step simple, secure, and stress-free.
          </p>
        </div>

        {/* W Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start">

          {/* 01 */}
          <div className="group">
            <FaGlobeAfrica
              size={70}
              className="text-blue-400 rounded-full bg-blue-200 px-4 py-4 mb-5 group-hover:translate-x-2 transition-transform duration-300"
            />

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              01. Discover Your Journey
            </h3>

            <p className="text-gray-600 leading-7">
              Tell us where you’re going, when you’re traveling, and what you
              need. Explore flights, hotels, transport, and holiday experiences
              tailored to your trip.
            </p>
          </div>

          {/* 02 */}
          <div className="group md:mt-28">
            <FaMapMarkedAlt
              size={70}
              className="text-blue-400 rounded-full bg-blue-200 px-4 py-4 mb-5 group-hover:translate-x-2 transition-transform duration-300"
            />

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              02. Find What Fits
            </h3>

            <p className="text-gray-600 leading-7">
              Compare your options by price, location, ratings, and features
              to find the perfect match for your travel plans and budget.
            </p>
          </div>

          {/* 03 */}
          <div className="group">
            <MdAutoAwesome
              size={70}
              className="text-blue-400 rounded-full bg-blue-200 px-4 py-4 mb-5 group-hover:rotate-12 transition-transform duration-300"
            />

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              03. Book With Confidence
            </h3>

            <p className="text-gray-600 leading-7">
              Choose your preferred option and complete your booking through a
              simple, secure, and transparent checkout process.
            </p>
          </div>

          {/* 04 */}
          <div className="group md:mt-28">
            <MdOutlinePayments
              size={70}
              className="text-blue-400 rounded-full bg-blue-200 px-4 py-4 mb-5 group-hover:scale-110 transition-transform duration-300"
            />

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              04. Travel With Ease
            </h3>

            <p className="text-gray-600 leading-7">
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