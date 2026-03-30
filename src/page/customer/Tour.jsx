import React from 'react'
import { useRealtimeCollection } from '../../services/useCollection';
import { TourList } from '../../components/customer/TourList';
import { FilterBar } from '../../components/customer/FilterBar';
import { Pagination } from '../../components/customer/Pagination';
import SortBar from '../../components/customer/SortBar';

export const Tour = () => {

  // Realtime data from Firebase
  const { data: tour, setData: setTour, } = useRealtimeCollection("tours"); //sử dụng custom hook
  const { data: category, setData: setCategory, } = useRealtimeCollection("categories");
  
  return (
    <div className="ml-25 mr-25 mx-auto">
      <FilterBar tour={tour}/>
      <SortBar tour={tour}/>
      <TourList tour={tour}/>
      <Pagination/>
    </div>
  )
}
