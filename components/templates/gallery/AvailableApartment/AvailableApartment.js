import Title from "@/components/modules/title/Title";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AvailableApartment({ data }) {
  return (
    <>
      <Title text="آپارتمان های موجود" />
      <Swiper spaceBetween={50} slidesPerView={3} loop={true}>
        {data
          .filter((i) => i.type === "apartment")
          .map((i) => {
            return (
              <SwiperSlide key={i._id}>
                <img src={i.img} alt={i.type} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
