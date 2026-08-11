import { useState } from "react";
import { FaPlane, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-6 lg:px-8 my-9">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <FaPlane className="text-blue-500" size={40} />
                    <h4 className="text-3xl font-bold text-slate-900">
                        Trip<span className="text-blue-500">Sphere</span>
                    </h4>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 justify-center lg:flex">
                    <div className="flex items-center gap-10 font-medium whitespace-nowrap">
                        <Link
                            to="/"
                            className="text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/services"
                            className="text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Services
                        </Link>

                        <Link
                            to="/ourteam"
                            className="text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Our Team
                        </Link>
                        
                    </div>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Link
                        to="/contact"
                        className="flex h-12 items-center rounded-full bg-blue-500 px-8 font-medium text-white shadow-md transition-all duration-300 hover:bg-black hover:shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-2xl text-slate-900 lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white shadow-md lg:hidden">
                    <div className="flex flex-col space-y-5 px-6 py-6 font-medium">
                        <Link
                            to="/"
                            className="text-slate-700 transition-colors hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="text-slate-700 transition-colors hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/services"
                            className="text-slate-700 transition-colors hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            to="/ourteam"
                            className="text-slate-700 transition-colors hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Our Team
                        </Link>

                        <Link
                            to="/contact"
                            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;