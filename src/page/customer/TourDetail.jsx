import React from 'react'
import { SlideTourDetail } from '../../components/customer/SlideTourDetail'
import { BreadCrumb } from '../../components/customer/BreadCrumb'
import { TourInfoSection } from '../../components/common/TourInfoSection'
import { BookingForm } from '../../components/customer/BookingForm'
import { TourBookingCart } from '../../components/customer/TourBookingCart'
import { useRealtimeCollection } from '../../services/useCollection'
import { TourCard } from '../../components/common/TourCard'
import { useParams } from 'react-router-dom'
import { useRealtimeDocument } from '../../services/useRealtimeDocument'
import { Pagination } from '../../components/customer/Pagination'

export const TourDetail = () => {

    const { id } = useParams(); // Lấy ID từ URL

    const { data: currentTour } = useRealtimeDocument("tours", id) // Lấy dữ liệu tour hiện tại dựa trên ID

    const { data: tour, setData: setTour, } = useRealtimeCollection("tours"); //sử dụng custom hook

    // Lọc bỏ tour hiện tại khỏi danh sách tour tương tự
    const similarTours = tour.filter(t => t.id !== id);

    return (
        <div className="ml-25 mt-3 mr-25 mb-10">
            <BreadCrumb currentTour={currentTour} />
            <div className="flex gap-5 main-layout">
                {/* left */}
                <div className="flex-1 min-w-0">
                    <SlideTourDetail currentTour={currentTour} />
                    <TourInfoSection currentTour={currentTour} />
                    <BookingForm currentTour={currentTour} />
                </div>
                {/* right */}
                <div className="sidebar-col w-full lg:w-120 flex-shrink-0">
                    <TourBookingCart currentTour={currentTour} />
                </div>
            </div>



            <div className="mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-[26px] font-extrabold tracking-wide mb-1">
                        <span className="text-amber-400">Tour tương tự</span>
                    </h2>
                </div>
                {/* Grid */}
                {similarTours.length === 0 ? ( // Nếu không có tour tương tự nào, hiển thị thông báo
                    <div className="text-center py-12 text-gray-400 text-sm">
                        Không có tour nào!
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {similarTours.map((item, index) => ( // Hiển thị các tour tương tự, loại bỏ tour hiện tại
                            <TourCard
                                index={index}
                                key={item.id}
                                tourItem={item}
                            />
                        ))}
                    </div>
                )}
            </div>
                <Pagination />
        </div>
    )
}
