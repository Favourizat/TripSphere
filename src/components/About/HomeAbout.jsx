import HomeAbt from "../assets/HomeAbt.jpg";
import CountUp from "./CountUp";

const HomeAbout = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side - Image */}
                <div className="lg:w-1/2">
                    <img
                        src={HomeAbt}
                        alt="About TripSphere"
                        className="w-full h-125 object-cover rounded-3xl shadow-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-1/2 max-w-2xl">

                    {/* Section Tag */}
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                        About Us
                    </span>

                    {/* Heading */}
                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Your Trusted Partner for Every Adventure
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-gray-600 leading-8 text-lg">
                        From discovering breathtaking destinations to planning every
                        detail of your trip,{" "}
                        <span className="font-semibold">TripSphere</span> is dedicated to
                        delivering seamless travel experiences tailored to your needs,
                        wherever your journey takes you.
                    </p>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-4xl font-bold text-blue-600">
                                <CountUp end={98} suffix="%" />
                            </h3>
                            <p className="mt-2 text-gray-600 font-medium">
                                Customer Satisfaction
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-4xl font-bold text-blue-600">
                                <CountUp end={90} suffix="%" />
                            </h3>
                            <p className="mt-2 text-gray-600 font-medium">
                                Global Destinations
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-4xl font-bold text-blue-600">
                                <CountUp end={86} suffix="%" />
                            </h3>
                            <p className="mt-2 text-gray-600 font-medium">
                                Repeat Travelers
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                        Book Now
                    </button>

                </div>

            </div>
        </section>
    )
}

export default HomeAbout;