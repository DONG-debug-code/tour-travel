import React from 'react'
import { TourCard } from './TourCard';
import { useRealtimeCollection } from '../../services/useCollection';

export const TourSection = ({ tour = [], categoryItem }) => {

    if (!categoryItem) return null;
    const filteredTours = tour.filter((item) => item.categoryId === categoryItem?.slug); // Lọc tour theo categoryId
    const displayTours = filteredTours.slice(0, 4); // Hiển thị tối đa 4 tour

    return (
        <section className="py-8">
            {/* Heading */}
            <div className="text-center mb-6">
                <h2 className="text-[26px] font-extrabold tracking-wide mb-1">
                    <span className="text-amber-400">{categoryItem?.name}</span>
                </h2>
                <p className="text-[13.5px] text-slate-500 font-normal">
                    {categoryItem?.decription}
                </p>
            </div>

            {/* Grid */}
            {tour.length === 0 ? (
                <div className="text-center py-12 text-gray-400 text-sm">
                    Không có tour nào!
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {displayTours.map((item, index) => (
                        <TourCard
                            index={index}
                            key={item.id}
                            tourItem={item}
                        />
                    ))}
                </div>
            )}

            {/* View all */}
            <div className="flex justify-center mt-6">
                <a
                    href="#"
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-red-500 hover:text-red-600 border border-red-400 hover:border-red-500 rounded-full px-5 py-2 transition-colors duration-150"
                >
                    Xem tất cả
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

        </section>
    )
}