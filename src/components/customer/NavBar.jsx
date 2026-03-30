import React from 'react'
import { MdTour } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';
import { GrHome } from "react-icons/gr";
import { useAuth } from '../../context/AuthContext';

const navLinkClass = ({ isActive }) =>
    `relative inline-flex items-center gap-2 px-4 h-full text-sm font-semibold transition-colors
   after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
   after:h-1 after:bg-yellow-400 after:transition-all after:duration-300
   ${isActive
        ? "text-yellow-400 after:w-full"
        : "text-white hover:text-yellow-400 after:w-0 hover:after:w-full"
    }`;

export const NavBar = () => {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <div>
            <div className="bg-[#0d3472] mr-25 ml-25 flex items-center h-16">
                {/* Logo */}
                <NavLink to="/customer" className="flex flex-col leading-tight mr-10 shrink-0">
                    <div className="flex items-end gap-0.5">
                        <span className="text-white font-black text-3xl italic tracking-tight">DaNang</span>
                        <span className="text-yellow-400 font-bold text-xl italic">Tour</span>
                        <svg width="22" height="14" viewBox="0 0 22 14" className="mb-2 ml-0.5" fill="none">
                            <path d="M2 12 L10 4 L18 8 L20 2" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 2 L20 2 L20 8" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-yellow-400 text-[11px] italic tracking-widest -mt-1 ml-1">
                        Enjoy your life
                    </span>
                </NavLink>

                {/* Nav items */}
                <nav className="flex items-center flex-1 gap-8 h-full justify-center uppercase">
                    <NavLink to="/customer" end className={navLinkClass}>
                        <GrHome className='mr-1' /> Trang chủ
                    </NavLink>
                    <NavLink to="/customer/tour" className={navLinkClass}>
                        <MdTour className="mr-1" /> Tour du lịch
                    </NavLink>
                    <NavLink to="/customer/hotel" className={navLinkClass}>
                        <FaHotel className="mr-1" /> Khách sạn
                    </NavLink>
                </nav>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="bg-white text-black rounded-lg w-56 h-10 p-4
                        placeholder:text-gray-400 border border-gray-500
                        focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {user && (
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            onClick={handleLogout}
                            className="flex ml-5 items-center gap-2 bg-white/15 hover:bg-white/25 
                                           text-white text-sm font-medium px-4 py-2 rounded-lg 
                                           border border-white/20 transition"
                        >
                            Đăng xuất
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};