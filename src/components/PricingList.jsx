
import {pricingPackages} from "../constant/tourdata";
import PricingCard from "./PricingCard"

const PricingList = () => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingPackages?.map((pricing) => (
                    <div key={pricing.id}>
                        <PricingCard pricing={pricing}/>
                    </div>
                ))}
            </div>
    )
}
export default PricingList;