import React from 'react'

export const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-2xl font-bold text-[#0d3472] mb-4">DaNangTour</h1>

            <div className="w-12 h-12 border-4 border-blue-200 border-t-[#0d3472] rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-500">Đang tải hệ thống...</p>
        </div>
    );
}
