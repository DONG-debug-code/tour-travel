import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../services/connectFirebase'

export const Header = () => {
  // Lấy thông tin user từ context
  const { user, role } = useAuth();

  // Chuyển hướng
  const navigate = useNavigate();

  // Hàm xử lý đăng xuất
  const handleLogout = async () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?");
    if (!confirmLogout) return;

    try {
      await signOut(auth); // Đăng xuất khỏi Firebase Auth
      navigate("/login"); // Chuyển hướng về trang đăng nhập
    } catch (err) {
      console.error("Logout error:", err);
      alert("Đăng xuất thất bại!");

    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d3472] shadow-lg shadow-gray-900 select-none ">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="cursor-pointer select-none text-xl font-bold text-white">Công Ty TNHH DaNangTour</h1>
            <p className="cursor-pointer select-none text-xs text-gray-300">Hệ thống quản lý</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="cursor-pointer select-none text-sm font-medium text-white">{role === "admin" ? "admin" : "customer"}</p>
            <p className="cursor-pointer select-none text-xs text-gray-300">{user?.email || "Chưa đăng nhập"}</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-white/15 hover:bg-white/25 
                                           text-white text-sm font-medium px-4 py-2 rounded-lg 
                                           border border-white/20 transition">
            <span className="text-sm font-medium">Đăng xuất</span>
          </button>
        </div>
      </div>
    </header>
  )
}
