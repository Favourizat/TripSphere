import user from "../assets/user.avif";
import user2 from "../assets/user2.avif";

const Testimonial = () => {
    return (
        <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Section Label */}
                <div className="text-center">
                    <p className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold tracking-widest text-blue-600 sm:text-sm">
                        TESTIMONIAL
                    </p>
                </div>

                {/* Main Content */}
                <div className="my-8 flex flex-col items-center gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">

                    {/* Left Content */}
                    <div className="w-full text-center lg:w-[50%] lg:text-left">

                        <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Don’t Believe Me?
                            <br className="hidden sm:block" />
                            Check What Clients
                            <br className="hidden sm:block" />
                            Think About Us
                        </h2>

                        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
                            Discover what our clients have to say about their travel
                            experiences. From easy bookings to unforgettable journeys,
                            we make every trip simple, smooth, and memorable.
                        </p>

                    </div>

                    {/* Testimonial Cards */}
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-[50%]">

                        {/* Card 1 */}
                        <div className="relative flex min-h-[290px] flex-col items-center rounded-3xl bg-white px-5 pb-7 pt-20 text-center shadow-md transition-all duration-300 hover:shadow-xl sm:px-6">

                            {/* Profile Image */}
                            <img
                                src={user}
                                alt="Marie Grace"
                                className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white object-cover shadow-md"
                            />

                            <h4 className="text-lg font-bold text-gray-900">
                                Marie Grace
                            </h4>

                            <p className="mb-5 mt-1 text-xs font-medium text-blue-600">
                                Google Inc
                            </p>

                            <p className="max-w-xs text-sm leading-6 text-gray-500">
                                Experience a seamless travel journey with simple bookings
                                and great service every step of the way.
                            </p>

                            <div className="mt-auto pt-6 text-lg tracking-wide text-yellow-400">
                                ★★★★★
                            </div>

                        </div>

                        {/* Card 2 */}
                        <div className="relative flex min-h-[290px] flex-col items-center rounded-3xl bg-white px-5 pb-7 pt-20 text-center shadow-md transition-all duration-300 hover:shadow-xl sm:px-6">

                            {/* Profile Image */}
                            <img
                                src={user2}
                                alt="John Swiss"
                                className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white object-cover shadow-md"
                            />

                            <h4 className="text-lg font-bold text-gray-900">
                                John Swiss
                            </h4>

                            <p className="mb-5 mt-1 text-xs font-medium text-blue-600">
                                Microsoft Inc
                            </p>

                            <p className="max-w-xs text-sm leading-6 text-gray-500">
                                From booking to arrival, everything was smooth,
                                convenient, and exactly what I needed.
                            </p>

                            <div className="mt-auto pt-6 text-lg tracking-wide text-yellow-400">
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