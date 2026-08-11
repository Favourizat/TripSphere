import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ pricing }) => {
    const {
        id,
        image,
        tripType,
        title,
        price,
        duration,
        description,
        features,
    } = pricing;
    return (

        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-60 object-cover rounded-4xl mx-8"
                />

                {/* TripType Badge */}
                <span className="absolute top-5 left-11 text-white text-xl font-bold px-4 py-2 rounded-full">
                    {tripType}
                </span>
                {/* TripType Badge */}
                <span className="text-black pt-5 pl-7 text-3xl font-bold px-4 py-2 rounded-full">
                    ${price}
                </span>
            </div>

            {/* Card Content */}
            <div className="p-6">
                {/* Destination & Rating */}
                <div className="">
                    <div className="gap-2 text-gray-600">
                        <span className="font-medium">{description}</span>
                    </div>

                    <div className="flex flex-col gap-4 my-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <FaCheck className="text-blue-500 shrink-0" />
                                <span className="font-semibold text-gray-600">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Price & Button */}
                <div className="mt-6 flex items-center justify-between">

                    <Link
                        to={"/service"}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                        View All Services
                    </Link>
                </div>
            </div>


        </div>
    )
}
export default PricingCard;