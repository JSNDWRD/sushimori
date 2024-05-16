import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Deals = () => {
  return (
    <section id="Deals" className="h-screen">
      <h1 className="pb-2 pt-4 text-center font-kanji text-6xl max-lg:text-4xl">
        プロモーション
      </h1>
      <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
        <Swiper
          navigation={true}
          pagination={true}
          breakpoints={{
            1: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/image/deals.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/deals.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/deals.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/deals.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/deals.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Deals;
