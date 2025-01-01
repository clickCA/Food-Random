import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="h-16"></div>{" "}
            {/* Spacer to prevent content from going under navbar */}
            <div className="navbar bg-blue-50/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 px-4 md:px-8 py-3 font-semibold text-slate-700 z-50">
                <div className="navbar-start w-1/3">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:bg-blue-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl w-52"
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/menu"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    All Menu
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <i className="fas fa-utensils text-2xl text-blue-500 hover:rotate-12 transition-all duration-300"></i>
                        <span className="text-lg font-bold text-blue-600">
                            FoodPick
                        </span>
                    </div>
                </div>

                <div className="navbar-center w-1/3">
                    <div className="flex lg:hidden items-center gap-2">
                        <i className="fas fa-utensils text-2xl text-blue-500"></i>
                        <span className="text-lg font-bold text-blue-600">
                            FoodPick
                        </span>
                    </div>
                    <ul className="hidden lg:flex menu menu-horizontal gap-4">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-blue-600 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className="hover:text-blue-600 transition-colors"
                            >
                                All Menu
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end w-1/3 justify-end">
                    <a
                        href="https://linktr.ee/clickCA"
                        target="_blank"
                        className="btn btn-sm md:btn-md bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:scale-105 transition-all duration-300 border-none"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
