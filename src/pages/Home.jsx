import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedPartners from "../components/TrustedPartners";
import HomeAbout from "../components/HomeAbout";
import FeaturedTourList from "../components/FeaturedTourList";
import { Link } from "react-router-dom";
import BookingSection from "../components/BookingSection";
import PricingList from "../components/PricingList";
import Why from "../components/Why";
import Download from "../components/Download";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">

            <Hero />

            <TrustedPartners />

            <HomeAbout />


            {/* ================= POPULAR DESTINATIONS ================= */}

            <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mx-auto max-w-7xl text-center">

                    {/* Section Label */}

                    <h4 className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600 sm:text-sm">
                        Explore
                    </h4>


                    {/* Heading */}

                    <h2 className="mx-auto mt-5 mb-8 max-w-3xl text-2xl font-bold leading-tight text-gray-900 sm:mt-6 sm:mb-10 sm:text-3xl md:text-4xl lg:mb-12">
                        Discover Popular Travel Destinations
                    </h2>


                    {/* Featured Tours */}

                    <FeaturedTourList />


                    {/* View Services Button */}

                    <Link
                        to="/services"
                        className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:mt-10 sm:px-10 sm:text-base"
                    >
                        View all Services
                    </Link>

                </div>

            </section>


            {/* ================= BOOKING ================= */}

            <BookingSection />


            {/* ================= PRICING INTRO ================= */}

            <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mx-auto max-w-4xl text-center">

                    {/* Section Label */}

                    <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 sm:px-5 sm:text-sm">
                        Pricing
                    </span>


                    {/* Heading */}

                    <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">

                        Discover the World

                        <br className="hidden sm:block" />

                        <span className="block text-blue-600 sm:inline">
                            with Our Exclusive Packages
                        </span>

                    </h1>


                    {/* Description */}

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">

                        Explore unforgettable destinations with carefully curated
                        travel packages designed to make every journey exciting,
                        comfortable, and hassle-free. From relaxing getaways to
                        thrilling adventures, your next experience starts here.

                    </p>

                </div>

            </section>


            {/* ================= PRICING ================= */}

            <PricingList />


            {/* ================= WHY CHOOSE US ================= */}

            <Why />


            {/* ================= DOWNLOAD ================= */}

            <Download />


            {/* ================= TESTIMONIAL ================= */}

            <Testimonial />

        </div>
    );
};

export default Home;