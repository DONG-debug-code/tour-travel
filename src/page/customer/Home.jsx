import { TourSection } from "../../components/common/TourSection";
import { BannerBooking } from "../../components/customer/BannerBooking";
import { useRealtimeCollection } from "../../services/useCollection";

export const Home = () => {

  // Realtime data from Firebase
  const { data: tour, setData: setTour, } = useRealtimeCollection("tours"); //sử dụng custom hook
  const { data: category, setData: setCategory, } = useRealtimeCollection("categories"); //sử dụng custom hook

  return (
    <>
      <section>
        <BannerBooking />
      </section>
      <div className="ml-25 mr-25 mx-auto">
        {tour && category.map((item, index) => (
          <TourSection
            index={index}
            key={item.id}
            tour={tour}
            categoryItem={item}
          />
        ))}
      </div>
    </>
  );
}