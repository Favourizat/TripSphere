import Adventure from "../assets/travel/adventure.avif"
import {
    FaNetworkWired,
    FaClipboardList,
    FaMapMarkedAlt
} from "react-icons/fa";


const Why = () => {
    return (
        <section className="py-10 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side - Image */}
                <div className="lg:w-1/2">
                    <img
                        src={Adventure}
                        alt="About TripSphere"
                        className="w-full h-195 object-cover rounded-3xl shadow-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-1/2 max-w-2xl">

                    {/* Section Tag */}
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                        Why Choose Us
                    </span>

                    {/* Heading */}
                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Your Next Great Adventure Awaits
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-gray-600 leading-8 text-lg">
                        From exploring stunning destinations to planning every detail of your perfect journey
                        ,{" "}
                        <span className="font-semibold">TripSphere</span> is committed to creating seamless travel
                        experiences designed around your needs, from the moment you plan your trip to wherever your journey takes you.

                    </p>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-1 gap-6">
                        <div className="bg-gray-50 flex gap-4 rounded-2xl p-3 shadow-sm hover:shadow-lg transition duration-300">
                            <span><FaNetworkWired size={20} /></span>
                            <div>
                                <h3 className="text-2xl font-bold text-shadow-black-600">Global Network</h3>
                                <p className="mt-1 text-gray-600 font-medium">
                                    Adipiscing turpis sed faucibus magna at sit tincidunt. Non. Omagna at sit.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 flex gap-4 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                            <span><FaClipboardList size={20} /></span>
                            <div>
                                <h3 className="text-2xl font-bold text-black-600">Personalized Plans</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Adipiscing turpis sed faucibus magna at sit tincidunt. Non. Omagna at sit.
                                </p>
                            </div>
                        </div>


                        <div className="bg-gray-50 flex gap-4 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
                            <span><FaMapMarkedAlt size={20} /></span>
                            <div>
                                <h3 className="text-2xl font-bold text-black-600">Professional Guide</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Adipiscing turpis sed faucibus magna at sit tincidunt. Non. Omagna at sit.
                                </p>
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>
        </section>
    )
}

export default Why;
