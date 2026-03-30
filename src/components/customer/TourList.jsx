import React from 'react'
import { TourCard } from '../common/TourCard'

export const TourList = ( { tour } ) => {
    return (
        <section className="pt-8">
            {/* Grid */}
            {tour.length === 0 ? (
                <div className="text-center py-12 text-gray-400 text-sm">
                    Không có tour nào!
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tour.map((item, index) => (
                        <TourCard
                            index={index}
                            key={item.id}
                            tourItem={item}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
