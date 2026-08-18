import {
  FaPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-10 xl:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
                <FaPlane className="text-lg text-white" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Trip<span className="text-blue-600">Sphere</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Your trusted travel companion for discovering amazing
              destinations, booking unforgettable trips, and creating
              memories that last a lifetime.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900 sm:mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Home",
                "About Us",
                "Destinations",
                "Flights",
                "Hotels",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900 sm:mb-6">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Popular Destinations",
                "Holiday Packages",
                "Travel Guides",
                "Travel Deals",
                "Travel Tips",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900 sm:mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm">

              {/* Location */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-blue-600" />

                <p className="text-gray-500">
                  Abuja, Nigeria
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-blue-600" />

                <p className="break-words text-gray-500">
                  +234 800 000 0000
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-blue-600" />

                <p className="break-all text-gray-500">
                  hello@tripsphere.com
                </p>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-7">
              <h4 className="mb-3 text-sm font-semibold text-gray-900">
                Get travel updates
              </h4>

              <div className="flex w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition focus-within:border-blue-500">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:px-4"
                />

                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex shrink-0 items-center justify-center bg-blue-600 px-4 text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  <FaArrowRight />
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 pt-6 sm:mt-14 sm:pt-7">

          <div className="flex flex-col items-center justify-between gap-5 text-center text-sm md:flex-row md:text-left">

            <p className="text-gray-500">
              © 2026 TripSphere. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
              <a
                href="#"
                className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;