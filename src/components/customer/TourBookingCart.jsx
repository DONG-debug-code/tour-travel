import React from "react";
import { Booking } from "./Booking";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const TourBookingCart = ({ currentTour }) => {

  const { title, departure, salePrice, price, trip } = currentTour || {}; // Sử dụng optional chaining để tránh lỗi khi currentTour là null hoặc undefined

  const discount = price && salePrice
    ? Math.round((1 - salePrice / price) * 100)
    : null;

  const formatPrice = (val) =>
    new Intl.NumberFormat("vi-VN").format(val) + "đ";

  const navigate = useNavigate();
  const { user } = useAuth();
  const handBooking = () => {
    if(!user) {
      navigate("/login");
    } else {
      navigate("/customer/booking");
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white w-full">

      {/* Title */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-200">
        <h2 className="text-[15px] font-bold text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-4">

        {/* Departure location */}
        <div className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5">
          <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[13px] text-gray-700 font-medium">{departure}</span>
        </div>

        {/* Price + discount badge */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[26px] font-extrabold text-amber-500 leading-none">
              {formatPrice(salePrice)}
            </p>
            {price && price !== salePrice && (
              <p className="text-[13px] text-gray-400 line-through mt-1">
                Giá mới: {formatPrice(price)}
              </p>
            )}
          </div>

          {discount && (
            <div className="border-2 border-dashed border-red-500 rounded px-3 py-1.5 text-center shrink-0">
              <p className="text-[11px] font-semibold text-red-500 leading-none">Tiết kiệm</p>
              <p className="text-[18px] font-extrabold text-red-500 leading-tight">
                -{discount}%
              </p>
            </div>
          )}
        </div>

        {/* Print button */}
        <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 transition-colors text-white text-[13px] font-semibold px-4 py-2 rounded-md">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          In chương trình tour
        </button>

        {/* Route */}
        <p className="text-[13px] text-gray-600">
          Hành trình: <span className="font-medium text-gray-800">{trip}</span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-5">
        <button onClick={handBooking} className="w-full bg-[#0d3472] hover:bg-[#0a2a5e] active:bg-[#081f46] transition-colors text-white font-bold text-[14px] tracking-widest py-4 rounded-lg uppercase">
          Đặt giữ chỗ ngay
        </button>
      </div>

    </div>
  );
};