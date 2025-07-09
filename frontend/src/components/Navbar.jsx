import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Generate from "./Generate";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export function Navbar() {
    const { isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleShowProfile = () => {
        navigate('/profile');
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-slate-300 flex justify-between items-center px-4 h-14 ">
                <div className="logo-container hover:scale-110 flex gap-2 transition-transform">
                    <div className="logo font-bold md:text-2xl">
                        Pass
                        <span className="text-green-600">Safe</span>
                    </div>
                </div>

                {/* Hamburger Icon */}
                <button onClick={toggleMenu} className="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Navigation Links (visible on medium+ screens) */}
                <ul className="hidden md:flex md:gap-4 items-center">
                    <li className="flex gap-4 items-center">
                        <div className="flex gap-1 bg-green-400 rounded-2xl ring-white p-1 border-2 border-opacity-75 hover:scale-110">
                            
                            
                        </div>
                        <Link className="hover:font-bold transition-transform bg-slate-200 p-2 rounded-full border-slate-400 border" to="/generate"> Generate </Link>

                        {
                            isAuthenticated && (
                                <article className="profile cursor-pointer w-auto hover:scale-110 hover:font-bold transition-transform" >
                                    <img
                                        src={user.picture || require(`./assets/noprofile.jpg`)}
                                        alt='Profile'
                                        className="rounded-full w-12 h-12 object-cover"
                                        onClick={handleShowProfile}
                                    />
                                </article>
                            )
                        }
                    </li>
                </ul>

                {/* Mobile Menu (visible when toggled) */}
                {isMenuOpen && (
                    <ul className="absolute top-14 left-0 w-full bg-slate-200 flex justify-around items-center p-2 md:hidden">
                        <li className="gap-4 items-center">
                            <Link className="hover:font-bold transition-transform bg-slate-200 p-2 rounded-full border-slate-400 border" to="/generate"> Generate </Link>
                        </li>
                        <li>
                            {
                                isAuthenticated && (
                                    <article className="profile cursor-pointer w-auto hover:scale-110 hover:font-bold transition-transform" >
                                        <img
                                            src={user.picture || require(`./assets/noprofile.jpg`)}
                                            alt='Profile'
                                            className="rounded-full w-12 h-12 object-cover"
                                            onClick={handleShowProfile}
                                        />
                                    </article>
                                )
                            }
                        </li>
                        <li>
                            <div className="flex gap-1 bg-green-400 rounded-2xl ring-white p-1 border-2 border-opacity-75 hover:scale-110">
                            
                            </div>
                        </li>
                    </ul>
                )}
            </nav>

            <Routes>
                <Route path="/generate" element={<Generate />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    )
}
