import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/Rick_and_Morty.svg.png'

const Navbar = () => {
    return (
        <nav className="p-4 shadow-lg bg-green-800">
            <div className="container mx-auto max-w-screen-xl flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={Logo} alt="Logo" className="w-80" />
                </div>
                {/* Navigation Links */}
                <div className="space-x-8">
                    <a className="text-white text-lg hover:text-gray-300">
                        <Link to="/">Accueil</Link>
                    </a>
                    <a className="text-white text-lg hover:text-gray-300"><Link to="/abonner">
                        Abonnés</Link>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar