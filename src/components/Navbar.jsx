import { useState } from "react";
import { FaPlane, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 shrink-0"
                    onClick={() => setIsOpen(false)}
                >
                    <FaPlane
                        className="text-blue-500"
                        size={32}
                    />

                    <h4 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Trip<span className="text-blue-500">Sphere</span>
                    </h4>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 justify-center lg:flex">
                    <div className="flex items-center gap-6 xl:gap-10 font-medium whitespace-nowrap">

                        <Link
                            to="/"
                            className="text-base xl:text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="text-base xl:text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/services"
                            className="text-base xl:text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Services
                        </Link>

                        <Link
                            to="/ourteam"
                            className="text-base xl:text-lg text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Our Team
                        </Link>

                    </div>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block shrink-0">
                    <Link
                        to="/contact"
                        className="flex h-11 items-center rounded-full bg-blue-500 px-6 xl:px-8 text-sm xl:text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-black hover:shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-slate-900 transition hover:bg-slate-100 lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white shadow-md lg:hidden">

                    <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">

                        <Link
                            to="/"
                            className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/services"
                            className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>

                        <Link
                            to="/ourteam"
                            className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Our Team
                        </Link>

                        <Link
                            to="/contact"
                            className="mt-3 flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-900"
                            onClick={() => setIsOpen(false)}
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