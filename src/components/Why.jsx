import Adventure from "../assets/travel/adventure.avif";
import {
    FaNetworkWired,
    FaClipboardList,
    FaMapMarkedAlt,
} from "react-icons/fa";

const Why = () => {
    return (
        <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-20 lg:py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-16">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={Adventure}
                        alt="About TripSphere"
                        className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96 md:h-[480px] lg:h-[620px] xl:h-[700px]"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full max-w-2xl lg:w-1/2">

                    {/* Section Tag */}
                    <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
                        Why Choose Us
                    </span>

                    {/* Heading */}
                    <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:mt-6 sm:text-4xl md:text-5xl">
                        Your Next Great Adventure Awaits
                    </h2>

                    {/* Description */}
                    <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        From exploring stunning destinations to planning every
                        detail of your perfect journey,{" "}
                        <span className="font-semibold">TripSphere</span> is
                        committed to creating seamless travel experiences
                        designed around your needs, from the moment you plan
                        your trip to wherever your journey takes you.
                    </p>

                    {/* Features */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5">

                        {/* Global Network */}
                        <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4 shadow-sm transition duration-300 hover:shadow-lg sm:p-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <FaNetworkWired size={18} />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                    Global Network
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                                    Adipiscing turpis sed faucibus magna at sit
                                    tincidunt. Non. Omagna at sit.
                                </p>
                            </div>
                        </div>

                        {/* Personalized Plans */}
                        <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4 shadow-sm transition duration-300 hover:shadow-lg sm:p-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <FaClipboardList size={18} />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                    Personalized Plans
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                                    Adipiscing turpis sed faucibus magna at sit
                                    tincidunt. Non. Omagna at sit.
                                </p>
                            </div>
                        </div>

                        {/* Professional Guide */}
                        <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4 shadow-sm transition duration-300 hover:shadow-lg sm:p-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <FaMapMarkedAlt size={18} />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                    Professional Guide
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                                    Adipiscing turpis sed faucibus magna at sit
                                    tincidunt. Non. Omagna at sit.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;