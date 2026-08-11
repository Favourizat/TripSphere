
import user from "../assets/user.avif";
import user2 from "../assets/user2.avif";

const Testimonial = () => {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                {/* Section Label */}
                <div className="text-center">
                    <p className="text-blue-600 font-semibold tracking-widest text-sm mb-5 inline-block bg-blue-100 px-4 py-2 rounded-full">
                        TESTIMONIAL
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 my-8">

                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
                            Don’t Believe Me?
                            <br />
                            Check What Clients
                            <br />
                            Think About Us
                        </h2>

                        <p className="text-gray-600 leading-7 max-w-2xl text-base md:text-lg">
                            Discover what our clients have to say about their travel
                            experiences. From easy bookings to unforgettable journeys,
                            we make every trip simple, smooth, and memorable.
                        </p>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Card 1 */}
                        <div className="relative min-h-[300px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 px-6 pt-20 pb-7 text-center">

                            {/* Profile Image */}
                            <img
                                src={user}
                                alt="Marie Grace"
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                            />

                            <h4 className="text-lg font-bold text-gray-900">
                                Marie Grace
                            </h4>

                            <p className="text-blue-600 text-xs font-medium mt-1 mb-5">
                                Google Inc
                            </p>

                            <p className="text-gray-500 text-sm leading-6">
                                Experience a seamless travel journey with simple bookings
                                and great service every step of the way.
                            </p>

                            <div className="mt-6 text-yellow-400">
                                ★★★★★
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative min-h-[300px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 px-6 pt-20 pb-7 text-center">

                            {/* Profile Image */}
                            <img
                                src={user2}
                                alt="John Swiss"
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                            />

                            <h4 className="text-lg font-bold text-gray-900">
                                John Swiss
                            </h4>

                            <p className="text-blue-600 text-xs font-medium mt-1 mb-5">
                                Microsoft Inc
                            </p>

                            <p className="text-gray-500 text-sm leading-6">
                                From booking to arrival, everything was smooth,
                                convenient, and exactly what I needed.
                            </p>

                            <div className="mt-6 text-yellow-400">
                                ★★★★★
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
