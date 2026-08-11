
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import TrustedPartners from "../components/TrustedPartners";
import HomeAbout from "../components/HomeAbout";
import FeaturedTourList from "../components/FeaturedTourList";
import { Link } from "react-router-dom";
import BookingSection from "../components/BookingSection";
import PricingList from "../components/PricingList"
import Why from "../components/Why"
import Download from "../components/Download";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <>
            
            <Hero />
            <TrustedPartners />
            <HomeAbout />


            <div className="text-center">
                <h4 className="inline-block bg-blue-100 text-blue-600 text-sm font-bold px-4 py-2 rounded-full">
                    Explore
                </h4>

                <h2 className="mt-6 mb-12 text-3xl md:text-4xl font-bold text-gray-900">
                    Discover Popular Travel Destinations
                </h2>
                <FeaturedTourList />

                <Link
                    to={"/services"}
                    className="inline-block mt-10 bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                    View all Services
                </Link>
            </div>

            <BookingSection />

            <div className="mx-auto max-w-4xl text-center mt-10">
                {/* Section Label */}
                <span className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-wider text-blue-600">
                    Pricing
                </span>

                {/* Heading */}
                <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    Discover the World
                    <br />
                    <span className="text-blue-600">with Our Exclusive Packages</span>
                </h1>

                {/* Description */}
                <p className="mx-auto mt-6 mb-12 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                    Explore unforgettable destinations with carefully curated travel
                    packages designed to make every journey exciting, comfortable, and
                    hassle-free. From relaxing getaways to thrilling adventures, your next
                    experience starts here.
                </p>
            </div>
            <PricingList />
            <Why />
            <Download />
            <Testimonial />
        </>
    )
}
export default Home;
