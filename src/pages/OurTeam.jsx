import {
  FaPlane,
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaGlobeAfrica,
  FaHeadset,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { teamMembers } from "../constant/tourdata";

const OurTeam = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              The People Behind TripSphere
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Meet the experts
              <span className="text-blue-600"> behind your journey.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              From finding the right flight to discovering unforgettable
              destinations, our team of travel experts is here to make every
              part of your journey easier, smoother, and more memorable.
            </p>

          </div>


          {/* ================= STATS ================= */}

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:mt-10 sm:flex sm:flex-wrap sm:gap-10 lg:gap-12">

            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                9+
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Travel Experts
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                20+
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Destinations
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                24/7
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Travel Support
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TEAM ================= */}

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-10 text-center sm:mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-sm sm:tracking-[0.2em]">
              Our Team
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-3 sm:text-4xl">
              Meet our travel experts
            </h2>

            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-600" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7">
              Passionate professionals dedicated to helping you plan,
              discover, and enjoy better travel experiences.
            </p>

          </div>


          {/* ================= TEAM GRID ================= */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">

            {teamMembers.map((member) => (

              <div
                key={member.id}
                className="group min-w-0"
              >

                {/* Image */}

                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
                  />

                  {/* Hover Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />


                  {/* Rating */}

                  <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-semibold opacity-0 shadow-md transition duration-300 group-hover:opacity-100 sm:bottom-5 sm:left-5 sm:text-sm">

                    <FaStar className="text-yellow-400" />

                    <span>Travel Expert</span>

                  </div>

                </div>


                {/* Content */}

                <div className="pt-5 sm:pt-6">

                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600 sm:text-base">
                    {member.role}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {member.description}
                  </p>


                  {/* Expertise */}

                  <div className="mt-4 flex flex-wrap gap-2">

                    {member.expertise.map((item) => (

                      <span
                        key={item}
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-600 sm:text-xs"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY OUR TEAM ================= */}

      <section className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

            {/* Text */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-sm sm:tracking-[0.2em]">
                Why TripSphere
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl">

                More than booking.

                <br className="hidden sm:block" />

                We help you travel better.

              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base">
                Our experts combine destination knowledge, travel experience,
                and genuine passion for exploration to help you make confident
                travel decisions.
              </p>

            </div>


            {/* Features */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">

              <div className="rounded-2xl bg-white p-5 sm:p-6">

                <FaGlobeAfrica className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Destination Knowledge
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Get recommendations based on real destination knowledge.
                </p>

              </div>


              <div className="rounded-2xl bg-white p-5 sm:p-6">

                <FaPlane className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Travel Expertise
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Find flights, stays, tours, and packages that fit your trip.
                </p>

              </div>


              <div className="rounded-2xl bg-white p-5 sm:p-6">

                <FaHeadset className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Dedicated Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We're here to help whenever you need travel assistance.
                </p>

              </div>


              <div className="rounded-2xl bg-white p-5 sm:p-6">

                <FaUmbrellaBeach className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Better Experiences
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We focus on creating journeys worth remembering.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-600 px-5 py-10 text-center sm:rounded-3xl sm:px-12 sm:py-14">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 sm:text-sm sm:tracking-[0.2em]">
            Your Journey Starts Here
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-4xl">
            Ready to plan your next adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
            Let our travel experts help you find the right destination,
            accommodation, transport, and experiences for your journey.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-100 sm:mt-8 sm:px-7 sm:py-3.5 sm:text-base"
          >
            Explore Our Services
            <FaArrowRight size={14} />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default OurTeam;