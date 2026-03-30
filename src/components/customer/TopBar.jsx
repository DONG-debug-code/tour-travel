import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export const TopBar = () => {
    return (
        <div className="text-white text-s px-6 pb-4 pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="text-gray-200 flex items-center gap-1">
                    <FaMapMarkerAlt />Số 17 Nguyễn Chí Thanh - Hải Châu - Đà Nẵng
                </span>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <FaPhoneAlt />0797 306 295
                    </span>
                    <span className="text-gray-400">-</span>
                    <span className="flex items-center gap-1">
                        <FaPhoneAlt />0912 120 208
                    </span>
                </div>
                <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <a href="#">Giới thiệu</a>
                    <a href="#">Liên hệ</a>
                </div>
            </div>
            </div>
        </div>
    )
}
