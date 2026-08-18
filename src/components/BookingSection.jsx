import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Hotel,
    Plane,
    Palmtree,
    Search,
} from "lucide-react";
import { bookingForms } from "../constant/tourdata";

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



const BookingSection = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("hotel");

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
            },
        }));
    };

    const handleSearch = () => {
        const currentForm = formData[activeTab];

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

        navigate(routes[activeTab], {
            state: {
                searchData: currentForm,
            },
        });
    };

    return (
        <section className="mx-3 mt-8 rounded-2xl bg-blue-100 py-4 sm:mx-5 sm:mt-10 sm:rounded-3xl md:mx-8 lg:mx-10">
            {/* ================= TABS ================= */}
            <div className="w-full overflow-x-auto px-4 sm:px-6 md:px-8">
                <div className="mx-auto flex min-w-max justify-center gap-6 border-b border-gray-300 sm:gap-10 md:gap-12">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <button
                                type="button"
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex shrink-0 items-center gap-2 border-b-4 py-4 text-base whitespace-nowrap transition-all duration-200 sm:gap-3 sm:py-5 sm:text-lg md:text-xl ${
                                    activeTab === tab.id
                                        ? "border-blue-600 font-bold text-blue-600"
                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-800"
                                }`}
                            >
                                <Icon
                                    size={22}
                                    strokeWidth={2.2}
                                    className="sm:h-6 sm:w-6"
                                />

                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ================= BOOKING FORM ================= */}
            <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-6 lg:gap-3">
                    {bookingForms[activeTab].map((field) => (
                        <div
                            key={field.name}
                            className="min-w-0 lg:col-span-1"
                        >
                            <label className="mb-2 block text-sm font-semibold text-gray-700 sm:text-base">
                                {field.label}
                            </label>

                            <input
                                type={field.type}
                                value={formData[activeTab][field.name]}
                                onChange={(e) =>
                                    handleChange(
                                        field.name,
                                        e.target.value
                                    )
                                }
                                placeholder={field.placeholder}
                                className="h-14 w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 outline-none transition focus:ring-2 focus:ring-blue-600 sm:text-base"
                            />
                        </div>
                    ))}

                    {/* Search Button */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <button
                            type="button"
                            onClick={handleSearch}
                            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 sm:text-lg"
                        >
                            <Search size={20} />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;