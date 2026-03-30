import React from 'react'
import { TabDetail } from '../customer/TabDetail';

export const TourInfo = ({currentTour}) => {

  console.log(currentTour);
  return (
    <div>
      <img className='w-full pr-10 pl-10' src={currentTour?.image} alt={currentTour?.title} />
      <TabDetail currentTour={currentTour}/>
    </div>
  )
}
