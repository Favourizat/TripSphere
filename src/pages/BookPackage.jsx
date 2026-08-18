import { useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { holidayPackages } from "../constant/tourdata";
import toast from "react-hot-toast";

const BookPackage = () => {
  const { id } = useParams();

  // Find the selected holiday package
  const packageData = holidayPackages.find(
    (tour) => tour.id === Number(id)
  );

  console.log("URL ID:", id);
  console.log("PACKAGE DATA:", packageData);

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
  if (!packageData) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-16 sm:px-8">
        <div className="w-full max-w-lg text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Package Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
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
          package_name: packageData.title,
          destination: packageData.destination,
          travel_date: formData.travelDate,
          travellers: formData.travellers,

          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,

          special_requests: formData.specialRequests,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(
        "Service ID:",
        import.meta.env.VITE_EMAILJS_SERVICE_ID
      );
      console.log(
        "Template ID:",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      );
      console.log(
        "Public Key:",
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
    <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">

        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Book Your Trip
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Complete Your Booking
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Fill in your details and our travel team will get back
            to you to confirm your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Booking Form */}
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7 md:p-8">
            {/* Your existing form */}
          </div>

          {/* Package Summary */}
          <div className="h-fit overflow-hidden rounded-2xl bg-white shadow-sm">

            <div className="relative h-56 w-full sm:h-64 md:h-72">
              <img
                src={packageData.image}
                alt={packageData.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Your existing summary */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookPackage;