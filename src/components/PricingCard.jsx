import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ pricing }) => {
    const {
        image,
        tripType,
        title,
        price,
        description,
        features,
    } = pricing;

    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image Section */}
            <div className="relative p-3 sm:p-4">

                <img
                    src={image}
                    alt={title}
                    className="h-52 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-60"
                />

                {/* Trip Type Badge */}
                <span className="absolute left-7 top-7 rounded-full bg-black/40 px-3 py-1.5 text-sm font-bold text-white backdrop-blur-sm sm:left-8 sm:top-8 sm:px-4 sm:py-2 sm:text-base">
                    {tripType}
                </span>

                {/* Price */}
                <div className="absolute bottom-7 left-7 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:bottom-8 sm:left-8 sm:px-4 sm:py-2">
                    <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {price}
                    </span>
                </div>

            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6">

                {/* Description */}
                <div>
                    <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {description}
                    </p>
                </div>

                {/* Features */}
                <div className="my-6 space-y-4">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3"
                        >
                            <FaCheck className="mt-1 shrink-0 text-sm text-blue-500" />

                            <span className="text-sm font-semibold leading-6 text-gray-600 sm:text-base">
                                {feature}
                            </span>
                        </div>
                    ))}

                </div>

                {/* Button */}
                <div className="mt-6">

                    <Link
                        to="/service"
                        className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 sm:w-auto sm:px-6 sm:text-base"
                    >
                        View All Services
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default PricingCard;