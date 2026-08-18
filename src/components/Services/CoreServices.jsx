import { FaCheck } from "react-icons/fa";

import { Link } from "react-router-dom";

import { services } from "../../constant/tourdata";

const CoreServices = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 max-w-2xl sm:mb-12 md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:mb-4 sm:text-sm">
            What We Offer
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Core Services
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
            Everything you need to plan, book, and enjoy your journey,
            conveniently brought together in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:gap-y-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:gap-x-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className="group">

                {/* Service Image */}
                <div className="relative mb-5 h-60 w-full overflow-hidden rounded-2xl sm:mb-6 sm:h-72 sm:rounded-3xl md:h-64 lg:h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md sm:bottom-5 sm:left-5 sm:h-12 sm:w-12">
                    <Icon className="text-lg text-blue-600 sm:text-xl" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-5 max-w-xl text-sm leading-7 text-gray-600 sm:mb-6 sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-3 sm:mb-7">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <FaCheck className="mt-1 shrink-0 text-xs text-blue-500 sm:text-sm" />

                      <span className="text-sm leading-6 text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {/* 
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
                >
                  {service.link}

                  <FaArrowRight size={14} />
                </Link>
                */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;