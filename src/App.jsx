
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HolidayDetails from "./pages/HolidayDetails";
import PopularDestinationDetails from "./pages/PopularDestinationDetails";
import OurTeam from "./pages/OurTeam";
import BookPackage from "./pages/BookPackage";
import { Toaster } from "react-hot-toast";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import FlightDetails from "./pages/FlightDetails";
import HolidaySearch from "./pages/HolidaySearch";
import HolidaySearchDetails from "./pages/HolidaySearchDetails";
import Bookt from "./pages/Bookt"
import BookHoliday from "./pages/BookHoliday";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/book-tour/:id"
          element={<Bookt />}
        />

        <Route
          path="/book-holiday/:id"
          element={<BookHoliday />}
        />

        <Route
          path="/holidays/:id"
          element={<HolidayDetails />}
        />

        <Route
          path="/holiday-search"
          element={<HolidaySearch />}
        />

        <Route
          path="/holiday-search/:id"
          element={<HolidaySearchDetails />}
        />

        <Route
          path="/popular-destinations/:id"
          element={<PopularDestinationDetails />}
        />

        <Route
          path="/ourteam"
          element={<OurTeam />}
        />

        <Route
          path="/book-package/:id"
          element={<BookPackage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route path="/hotels" element={<Hotels />} />

        <Route path="/flights" element={<Flights />} />

        <Route
          path="/flight-details/:id"
          element={<FlightDetails />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;