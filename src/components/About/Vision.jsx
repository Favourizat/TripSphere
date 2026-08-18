import CountUp from "../CountUp";

const Vision = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* Left Content */}
          <div className="w-full">

            {/* Small Heading */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
              Vision
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              TripSphere{" "}
              <span className="text-blue-600">Visionary Pathway</span>
            </h1>

            {/* Intro */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              TripSphere Visionary Pathway is our commitment to transforming
              travel into a seamless, inspiring, and unforgettable
              experience—connecting people to the right destinations,
              journeys, and experiences with ease.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-4">

              {/* Happy Clients */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4 md:p-5">
                <h3 className="text-3xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
                  <CountUp end={10} suffix="M" />
                </h3>

                <p className="mt-2 text-sm font-medium leading-5 text-gray-600">
                  Happy Clients
                </p>
              </div>

              {/* Customer Satisfaction */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4 md:p-5">
                <h3 className="text-3xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
                  <CountUp end={99} suffix="%" />
                </h3>

                <p className="mt-2 text-sm font-medium leading-5 text-gray-600">
                  Customer Satisfaction
                </p>
              </div>

              {/* Positive Reviews */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4 md:p-5">
                <h3 className="text-3xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
                  <CountUp end={18} suffix="K" duration={1000} />
                </h3>

                <p className="mt-2 text-sm font-medium leading-5 text-gray-600">
                  Positive Reviews
                </p>
              </div>

            </div>
          </div>

          {/* Right Vision Card */}
          <div className="relative w-full">

            {/* Decorative background */}
            <div className="absolute -right-2 -top-3 h-16 w-16 rounded-full bg-blue-100 opacity-70 blur-2xl sm:-right-4 sm:-top-4 sm:h-24 sm:w-24"></div>

            {/* Vision Card */}
            <div className="relative rounded-[1.5rem] bg-blue-600 p-6 shadow-xl sm:rounded-[2rem] sm:p-8 md:p-10">

              {/* Small label */}
              <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white sm:mb-6 sm:text-sm">
                Our Vision
              </span>

              {/* Heading */}
              <h2 className="mb-5 text-2xl font-bold leading-tight text-white sm:mb-6 sm:text-3xl md:text-4xl">
                Making Every Journey Worth Remembering
              </h2>

              {/* Paragraph */}
              <div className="space-y-4 text-sm leading-7 text-blue-50 sm:space-y-5 sm:text-base sm:leading-7">
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