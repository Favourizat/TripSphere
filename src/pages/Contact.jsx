import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
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
                import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
                {
                    customer_name: formData.name,
                    customer_email: formData.email,
                    customer_phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("Contact form error:", error);

            toast.error(
                error?.text || "Failed to send message."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto w-full max-w-6xl">

                {/* ================= HEADING ================= */}

                <div className="mb-10 text-center sm:mb-12">

                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 sm:text-base">
                        Get In Touch
                    </p>

                    <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Contact Us
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        Have a question, suggestion, or need help?
                        Send us a message and our team will get back to you.
                    </p>

                </div>

                {/* ================= MAIN CONTENT ================= */}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {/* ================= CONTACT INFORMATION ================= */}

                    <div className="rounded-2xl bg-blue-600 p-6 text-white sm:p-8">

                        <h2 className="text-2xl font-bold sm:text-3xl">
                            Let's Talk
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                            Whether you have a question about our services,
                            need assistance, or simply want to learn more
                            about TripSphere, we're here to help.
                        </p>

                        <div className="mt-8 space-y-6 sm:mt-10">

                            {/* Email */}

                            <div>
                                <p className="text-sm text-blue-200">
                                    Email
                                </p>

                                <p className="mt-1 break-words font-medium text-sm sm:text-base">
                                    hello@tripsphere.com
                                </p>
                            </div>

                            {/* Phone */}

                            <div>
                                <p className="text-sm text-blue-200">
                                    Phone
                                </p>

                                <p className="mt-1 font-medium text-sm sm:text-base">
                                    +234 800 000 0000
                                </p>
                            </div>

                            {/* Location */}

                            <div>
                                <p className="text-sm text-blue-200">
                                    Location
                                </p>

                                <p className="mt-1 font-medium text-sm sm:text-base">
                                    Abuja, Nigeria
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* ================= CONTACT FORM ================= */}

                    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7 md:p-8">

                        <h2 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl">
                            Send Us a Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* ================= NAME ================= */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 sm:text-base">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                                />

                            </div>

                            {/* ================= EMAIL ================= */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 sm:text-base">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                                />

                            </div>

                            {/* ================= PHONE ================= */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 sm:text-base">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+234..."
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                                />

                            </div>

                            {/* ================= SUBJECT ================= */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 sm:text-base">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    required
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                                />

                            </div>

                            {/* ================= MESSAGE ================= */}

                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-700 sm:text-base">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    rows="5"
                                    required
                                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                                />

                            </div>

                            {/* ================= SUBMIT ================= */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                            >
                                {loading
                                    ? "Sending Message..."
                                    : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;