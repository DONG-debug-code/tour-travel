import React from 'react'
import bannerbooking from '../../assets/images/banner_booking.png'

export const BannerBooking = () => {
    return (
        <>
            <div className="w-full">
                <img
                    src={bannerbooking}
                    alt="banner"
                    className="w-full object-cover"
                />
            </div>
        </>
    )
}
