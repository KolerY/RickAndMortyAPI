import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../assets/Rick_and_Morty.svg.png'

const Navbar = () => {
    return (
        <nav className="p-4 shadow-lg bg-green-800">
            <div className="container mx-auto max-w-screen-xl flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <NavLink to="/"><img src={Logo} alt="Logo" className="w-80" /></NavLink>
                </div>
                {/* Navigation */}
                <div className="space-x-8 font-bold">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                                ? "text-white text-2xl border-b-2 border-white"
                                : "text-white text-2xl hover:text-gray-300"
                        }
                        end
                    >
                        Accueil
                    </NavLink>
                    <NavLink 
                        to="/abonner" 
                        className={({ isActive }) => 
                            isActive 
                                ? "text-white text-2xl border-b-2 border-white"
                                : "text-white text-2xl hover:text-gray-300"
                        }
                    >
                        Abonnés
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar