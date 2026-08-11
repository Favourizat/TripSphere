
import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaGlobeAfrica,
  FaHeadset,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { teamMembers } from "../constant/tourdata";

// ================= TEAM DATA =================



const OurTeam = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              The People Behind TripSphere
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Meet the experts
              <span className="text-blue-600"> behind your journey.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              From finding the right flight to discovering unforgettable
              destinations, our team of travel experts is here to make every
              part of your journey easier, smoother, and more memorable.
            </p>

          </div>

          {/* Stats */}

          <div className="mt-10 flex flex-wrap gap-8">

            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                9+
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Travel Experts
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                20+
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Destinations
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                24/7
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Travel Support
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TEAM ================= */}

      <section className="px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet our travel experts
            </h2>

            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-600" />

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Passionate professionals dedicated to helping you plan,
              discover, and enjoy better travel experiences.
            </p>

          </div>


          {/* Team Grid */}

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

            {teamMembers.map((member) => (

              <div
                key={member.id}
                className="group"
              >

                {/* Image */}

                <div className="relative overflow-hidden rounded-3xl">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Rating */}

                  <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-semibold opacity-0 shadow-md transition duration-300 group-hover:opacity-100">

                    <FaStar className="text-yellow-400" />

                    <span>Travel Expert</span>

                  </div>

                </div>


                {/* Content */}

                <div className="pt-6">

                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 font-medium text-blue-600">
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
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
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

      <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why TripSphere
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                More than booking.
                <br />
                We help you travel better.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Our experts combine destination knowledge, travel experience,
                and genuine passion for exploration to help you make confident
                travel decisions.
              </p>

            </div>


            {/* Features */}

            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-6">
                <FaGlobeAfrica className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Destination Knowledge
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Get recommendations based on real destination knowledge.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6">
                <FaPlane className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Travel Expertise
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Find flights, stays, tours, and packages that fit your trip.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6">
                <FaHeadset className="text-2xl text-blue-600" />

                <h3 className="mt-4 font-bold text-gray-900">
                  Dedicated Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We're here to help whenever you need travel assistance.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-6">
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

      <section className="px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-8 py-14 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Your Journey Starts Here
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ready to plan your next adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Let our travel experts help you find the right destination,
            accommodation, transport, and experiences for your journey.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-gray-100"
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