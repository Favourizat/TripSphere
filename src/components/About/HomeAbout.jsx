import HomeAbt from "../assets/HomeAbt.jpg";
import CountUp from "./CountUp";

const HomeAbout = () => {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-16">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={HomeAbt}
                        alt="About TripSphere"
                        className="h-72 w-full rounded-2xl object-cover shadow-xl sm:h-96 sm:rounded-3xl md:h-[450px] lg:h-[520px]"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full max-w-2xl lg:w-1/2">

                    {/* Section Tag */}
                    <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
                        About Us
                    </span>

                    {/* Heading */}
                    <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                        Your Trusted Partner for Every Adventure
                    </h2>

                    {/* Description */}
                    <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        From discovering breathtaking destinations to planning every
                        detail of your trip,{" "}
                        <span className="font-semibold">TripSphere</span> is dedicated to
                        delivering seamless travel experiences tailored to your needs,
                        wherever your journey takes you.
                    </p>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
                        
                        {/* Stat 1 */}
                        <div className="rounded-2xl bg-gray-50 p-5 shadow-sm transition duration-300 hover:shadow-lg sm:p-6">
                            <h3 className="text-3xl font-bold text-blue-600 sm:text-4xl">
                                <CountUp end={98} suffix="%" />
                            </h3>

                            <p className="mt-2 text-sm font-medium leading-5 text-gray-600 sm:text-base">
                                Customer Satisfaction
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="rounded-2xl bg-gray-50 p-5 shadow-sm transition duration-300 hover:shadow-lg sm:p-6">
                            <h3 className="text-3xl font-bold text-blue-600 sm:text-4xl">
                                <CountUp end={90} suffix="%" />
                            </h3>

                            <p className="mt-2 text-sm font-medium leading-5 text-gray-600 sm:text-base">
                                Global Destinations
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="rounded-2xl bg-gray-50 p-5 shadow-sm transition duration-300 hover:shadow-lg sm:p-6">
                            <h3 className="text-3xl font-bold text-blue-600 sm:text-4xl">
                                <CountUp end={86} suffix="%" />
                            </h3>

                            <p className="mt-2 text-sm font-medium leading-5 text-gray-600 sm:text-base">
                                Repeat Travelers
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-8 w-full rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg sm:mt-10 sm:w-auto sm:py-4">
                        Book Now
                    </button>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;