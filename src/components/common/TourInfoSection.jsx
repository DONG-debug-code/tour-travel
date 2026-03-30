import React from 'react'
import { TourInfo } from './TourInfo'

export const TourInfoSection = ({currentTour}) => {
  return (
    <div>
        <TourInfo currentTour={currentTour}/>
    </div>
  )
}
