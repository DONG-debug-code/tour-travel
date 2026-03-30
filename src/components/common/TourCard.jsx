import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const TourCard = ({ tourItem }) => {
    const { title, salePrice, departure, image, price, duration } = tourItem;
    const [hovered, setHovered] = useState(false);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN").format(price);
    };

    return (
        <NavLink to={`/customer/tourdetail/${tourItem.id}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="rounded-lg overflow-hidden bg-white cursor-pointer flex flex-col transition-all duration-300"
            style={{
                boxShadow: hovered
                    ? '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)'
                    : '0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.07)',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
        >
            {/* Image */}
            <div className="relative pt-[58%] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-3 flex-1 flex flex-col gap-2">

                {/* Title */}
                <p className="m-0 text-[13px] font-bold text-slate-800 leading-[1.4] line-clamp-2">
                    {title}
                </p>

                {/* Meta info */}
                <div className="flex gap-3">
                    {departure && (
                        <span className="flex items-center gap-1 text-[11.5px] text-slate-500">
                            <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {departure}
                        </span>
                    )}
                    {duration && (
                        <span className="flex items-center gap-1 text-[11.5px] text-slate-500">
                            <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {duration}
                        </span>
                    )}
                </div>

                {/* Price */}
                <div className="mt-auto pt-2 border-t border-dashed border-slate-200">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            {price && price !== salePrice && (
                                <span className="text-[11px] text-slate-400 line-through leading-none mb-0.5">
                                    {formatPrice(price)}
                                </span>
                            )}
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-[10.5px] text-slate-500">Chỉ từ </span>
                                <span className="text-[16px] font-extrabold text-red-500 leading-none">
                                    {formatPrice(salePrice)}
                                </span>
                                <span className="text-[10.5px] text-slate-500">/khách</span>
                            </div>
                        </div>

                        <button
                            className="text-[11px] font-semibold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-1.5 rounded-full transition-colors duration-150 shrink-0"
                        >
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};