import { pricingPackages } from "../constant/tourdata";
import PricingCard from "./PricingCard";

const PricingList = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pricingPackages?.map((pricing) => (
                <div key={pricing.id} className="min-w-0">
                    <PricingCard pricing={pricing} />
                </div>
            ))}
        </div>
    );
};

export default PricingList;