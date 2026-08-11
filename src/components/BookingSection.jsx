
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Hotel,
    Plane,
    Bus,
    Palmtree,
    Search,
} from "lucide-react";

const tabs = [
    {
        id: "hotel",
        label: "Hotel",
        icon: Hotel,
    },
    {
        id: "flight",
        label: "Flight",
        icon: Plane,
    },
    {
        id: "holiday",
        label: "Holiday",
        icon: Palmtree,
    },
];

const bookingForms = {
    hotel: [
        {
            name: "destination",
            label: "Destination",
            type: "text",
            placeholder: "Where are you going?",
        },
        {
            name: "checkIn",
            label: "Check-in",
            type: "date",
        },
        {
            name: "checkOut",
            label: "Check-out",
            type: "date",
        },
        {
            name: "guests",
            label: "Guests",
            type: "number",
            placeholder: "Number of guests",
        },
    ],

    flight: [
        {
            name: "from",
            label: "From",
            type: "text",
            placeholder: "Departure city",
        },
        {
            name: "to",
            label: "To",
            type: "text",
            placeholder: "Arrival city",
        },
        {
            name: "departure",
            label: "Departure",
            type: "date",
        },
        {
            name: "returnDate",
            label: "Return",
            type: "date",
        },
        {
            name: "passengers",
            label: "Passengers",
            type: "number",
            placeholder: "Passengers",
        },
    ],

    holiday: [
        {
            name: "destination",
            label: "Destination",
            type: "text",
            placeholder: "Where do you want to go?",
        },
        {
            name: "travelDate",
            label: "Travel Date",
            type: "date",
        },
        {
            name: "duration",
            label: "Duration",
            type: "number",
            placeholder: "Days",
        },
        {
            name: "guests",
            label: "Guests",
            type: "number",
            placeholder: "Guests",
        },
    ],
};

const BookingSection = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("hotel")

    const [formData, setFormData] = useState({
        hotel: {
            destination: "",
            checkIn: "",
            checkOut: "",
            guests: "",
        },

        flight: {
            from: "",
            to: "",
            departure: "",
            returnDate: "",
            passengers: "",
        },

        holiday: {
            destination: "",
            travelDate: "",
            duration: "",
            guests: "",
        },
    });

    const handleChange = (fieldName, value) => {
        setFormData((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [fieldName]: value,
            }
        }))
    }

    const handleSearch = () => {
        const currentForm = formData[activeTab];

        console.log("ACTIVE TAB:", activeTab);
        console.log("CURRENT FORM:", currentForm);

        const isEmpty = Object.values(currentForm).some(
            (value) => value === ""
        );

        if (isEmpty) {
            alert("Please fill in all fields!");
            return;
        }

        const routes = {
            hotel: "/hotels",
            flight: "/flights",
            holiday: "/holiday-search",
        };

        console.log("NAVIGATING TO:", routes[activeTab]);

        navigate(routes[activeTab], {
            state: {
                searchData: currentForm,
            },
        });
    };


    return (
        <section className="py-5 mx-10 mt-10 bg-blue-100 rounded-3xl ">
            <div className="flex justify-center pr-10">
                <div className="flex items-center gap-12 border-b border-gray-300 mb-8 overflow-x-auto">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 py-5 cursor-pointer border-b-4 transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                                    ? "border-blue-600 text-blue-600 font-bold"
                                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                                    }`}
                            >
                                <Icon size={26} strokeWidth={2.2} />
                                <span className="text-xl">{tab.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Booking Form goes here */}

            <div className=" bg-blue-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 items-end">
                    {bookingForms[activeTab].map((field) => (
                        <div key={field.name}>
                            <label className="block text-lg font-semi-bold text-gray-700 mb-2">
                                {field.label}
                            </label>

                            <input type={field.type}
                                value={formData[activeTab][field.name]}
                                onChange={(e) =>
                                    handleChange(field.name, e.target.value)
                                }
                                placeholder={field.placeholder}
                                className="w-full border text-lg font-semi-bold border-gray-300 rounded-xl px-3 py-4 outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    ))}

                    <div>
                        <button
                            className="w-full h-14.5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"

                            onClick={handleSearch}>
                            <Search size={22} />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BookingSection;