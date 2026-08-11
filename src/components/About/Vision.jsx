import CountUp from "../CountUp";

const Vision = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            {/* Small Heading */}
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">
              Vision
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              TripSphere{" "}
              <span className="text-blue-600">Visionary Pathway</span>
            </h1>

            {/* Intro */}
            <p className="mt-6 max-w-2xl text-gray-600 text-lg leading-8">
              TripSphere Visionary Pathway is our commitment to transforming
              travel into a seamless, inspiring, and unforgettable
              experience—connecting people to the right destinations,
              journeys, and experiences with ease.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">

              {/* Happy Clients */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  <CountUp end={10} suffix="M" />
                </h3>

                <p className="mt-2 text-sm text-gray-600 font-medium">
                  Happy Clients
                </p>
              </div>

              {/* Customer Satisfaction */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  <CountUp end={99} suffix="%" />
                </h3>

                <p className="mt-2 text-sm text-gray-600 font-medium">
                  Customer Satisfaction
                </p>
              </div>

              {/* Positive Reviews */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  <CountUp end={18} suffix="K" duration={1000} />
                </h3>

                <p className="mt-2 text-sm text-gray-600 font-medium">
                  Positive Reviews
                </p>
              </div>

            </div>
          </div>

          {/* Right Vision Card */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-70"></div>

            <div className="relative bg-blue-600 rounded-[2rem] p-8 md:p-10 shadow-xl">

              {/* Small label */}
              <span className="inline-block bg-white/15 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                Our Vision
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Making Every Journey Worth Remembering
              </h2>

              {/* Paragraph */}
              <div className="space-y-5 text-blue-50 leading-7">
                <p>
                  At TripSphere, we envision a world where exploring new
                  places is simple, accessible, and truly memorable. Our
                  visionary pathway is built around transforming the way
                  people plan, book, and experience travel by bringing
                  flights, hotels, transportation, and holiday experiences
                  together in one seamless platform.
                </p>

                <p>
                  We are committed to using technology, convenience, and
                  thoughtful travel solutions to take the stress out of
                  planning while helping travelers discover new destinations
                  with confidence. From the first search to the final
                  journey, TripSphere aims to make every step smoother,
                  smarter, and more enjoyable.
                </p>

                
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;