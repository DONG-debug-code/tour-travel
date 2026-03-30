import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, db } from '../services/connectFirebase';
import { doc, setDoc } from 'firebase/firestore';

export const Register = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return
    }

    try { // Tạo tài khoản với Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, email, password); //tạo tài khoản với firebase auth
      const uid = res.user.uid; //lấy uid của user vừa tạo

      // Lưu thông tin user vào Firestore (collection "users", document uid)
      await setDoc(doc(db, "users", uid), {
        uid: uid,
        fullName: fullName,
        email: email,
        role: "customer",   // mặc định role là customer
        status: true,        // tài khoản đang hoạt động
        createdAt: new Date(),
      });

      alert("Đăng ký thành công!");
      navigate("/login");
    }
    catch (err) {
      switch (err.code) { // Xử lý lỗi đăng ký
        case "auth/email-already-in-use":
          alert("Email đã được sử dụng!");
          break;
        case "auth/invalid-email":
          alert("Email không hợp lệ!");
          break;
        case "auth/weak-password":
          alert("Mật khẩu quá yếu! Tối thiểu 8 ký tự.");
          break;
        default:
          alert("Đăng ký thất bại! Vui lòng thử lại.");
      }
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0d3472]">
      <form onSubmit={handleRegister} autoComplete='off'
        className="bg-white p-8 rounded-xl shadow-lg w-[350px] select-none">
        <h2 className="text-2xl font-medium text-center mb-6">Đăng Ký Tài Khoản</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Họ và tên</label>
          <input
            placeholder='Họ Và Tên'
            type="text"
            autoComplete="off"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className="input-field w-full p-3 border border-gray-200 rounded-xl text-sm bg-gray-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Email</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input-field w-full p-3 border border-gray-200 rounded-xl text-sm bg-gray-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Mật khẩu</label>
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Tối thiểu 6 ký tự"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input-field w-full p-3 border border-gray-200 rounded-xl text-sm bg-gray-50"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Xác nhận mật khẩu</label>
          <input
             type="password"
            autoComplete="new-password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="input-field w-full p-3 border border-gray-200 rounded-xl text-sm bg-gray-50"
          />
        </div>

        <button type="submit"
          className="w-full mt-2 bg-[#104bab] text-white py-3 rounded-lg hover:bg-[#0d3472] transition"> Tạo Tài Khoản
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Đã có tài khoản?
          <NavLink to="/login" className="text-[#104bab] pl-2 font-semibold hover:text-[#0d3472] transition-colors">
            Đăng nhập ngay
          </NavLink>
        </p>
      </form>
    </div>
  )
}
