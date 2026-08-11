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
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <FaPlane className="text-white text-lg" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Trip<span className="text-blue-600">Sphere</span>
              </h2>
            </div>

            <p className="text-gray-500 leading-7 text-sm max-w-sm">
              Your trusted travel companion for discovering amazing
              destinations, booking unforgettable trips, and creating
              memories that last a lifetime.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter className="text-sm" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
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
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
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
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />

                <p className="text-gray-500">
                  Abuja, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 flex-shrink-0" />

                <p className="text-gray-500">
                  +234 800 000 0000
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 flex-shrink-0" />

                <p className="text-gray-500">
                  hello@tripsphere.com
                </p>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-7">
              <h4 className="text-sm font-semibold mb-3 text-gray-900">
                Get travel updates
              </h4>

              <div className="flex bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 transition">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
                />

                <button className="px-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-14 pt-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

            <p className="text-gray-500">
              © 2026 TripSphere. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
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