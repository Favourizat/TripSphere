import React, { useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { tourdata } from "../constant/tourdata";
import toast from "react-hot-toast";

const Booktour = () => {
  const { id } = useParams();

  // Find the selected holiday package
  const tourData = tourdata.find(
    (tour) => tour.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travellers: 1,
    travelDate: "",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);

  // If package doesn't exist
  if (!tourData) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Package Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The holiday package you're looking for doesn't exist.
          </p>
        </div>
      </section>
    );
  }

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit booking
 const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        package_name: tourData.title,
        destination: tourData.destination,
        travel_date: formData.travelDate,
        travellers: formData.travellers,

        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,

        special_requests: formData.specialRequests,
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
    console.error("FULL EMAILJS ERROR:", error);
    console.error("STATUS:", error?.status);
    console.error("TEXT:", error?.text);

    toast.error(
      error?.text || "Failed to send booking request."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* ================= PAGE HEADING ================= */}

        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-wide text-blue-600">
            Book Your Trip
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Complete Your Booking
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Fill in your details and our travel team will get back
            to you to confirm your booking.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ================= BOOKING FORM ================= */}

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

          {/* ================= PACKAGE SUMMARY ================= */}

          <div className="h-fit overflow-hidden rounded-2xl bg-white shadow-sm">

            {/* Image */}

            <img
              src={tourData.image}
              alt={tourData.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-8">

              {/* Category */}

              <p className="font-medium text-blue-600">
                {tourData.category}
              </p>

              {/* Title */}

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {tourData.title}
              </h2>

              {/* Destination */}

              <p className="mt-2 text-slate-500">
                📍 {tourData.destination}
              </p>

              {/* Details */}

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Duration
                  </span>

                  <span className="font-semibold">
                    {tourData.duration}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Price
                  </span>

                  <span className="font-semibold">
                    {tourData.price.toLocaleString()}
                  </span>
                </div>

              </div>

              {/* Traveller Count */}

              <div className="mt-6 border-t border-slate-200 pt-6">

                <p className="text-sm text-slate-500">
                  Booking for
                </p>

                <p className="text-xl font-bold text-slate-900">
                  {formData.travellers} Traveller
                  {Number(formData.travellers) > 1
                    ? "s"
                    : ""}
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booktour;