import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const BookingForm = ({ item, type = "holiday" }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        travellers: 1,
        travelDate: "",
        specialRequests: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    package_name: item?.title || "Travel Booking",

                    destination: item?.destination || "",

                    travel_date: formData.travelDate,

                    travellers: formData.travellers,

                    customer_name: formData.name,

                    customer_email: formData.email,

                    customer_phone: formData.phone,

                    special_requests: formData.specialRequests,

                    price: item?.price
                        ? `₦${Number(item.price).toLocaleString()}`
                        : "",

                    duration: item?.duration || "",

                    booking_type: type,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success("Booking request sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                travellers: 1,
                travelDate: "",
                specialRequests: "",
            });

        } catch (error) {
            console.error("EMAILJS ERROR:", error);

            toast.error(
                error?.text || "Failed to send booking request."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Traveller Information
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                {/* Full Name */}

                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}

                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Phone */}

                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234..."
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Travellers */}

                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Number of Travellers
                    </label>

                    <input
                        type="number"
                        name="travellers"
                        min="1"
                        value={formData.travellers}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Travel Date */}

                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Preferred Travel Date
                    </label>

                    <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Special Requests */}

                <div>
                    <label className="mb-2 block font-medium text-slate-700">
                        Special Requests
                    </label>

                    <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requests or preferences?"
                        rows="4"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit */}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading
                        ? "Sending Booking..."
                        : "Send Booking Request"}
                </button>

            </form>
        </div>
    );
};

export default BookingForm;