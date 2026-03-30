import React from 'react'

export const BreadCrumb = ({currentTour}) => {
    return (
        <div>
            <nav className="flex items-center text-xs text-gray-500 mb-3 flex-wrap gap-1">
                <a href="#" className="text-blue-700 hover:underline">Trang chủ</a>
                <span className="mx-1">/</span>
                <span className="text-gray-600 font-medium">{currentTour?.title}</span>
            </nav>
        </div>
    )
}
