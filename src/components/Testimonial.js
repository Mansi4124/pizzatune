// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonial.css";
import "swiper/css/effect-fade";

const Testimonial = () => {
  return (
    <>
    <div  className="testimonial-title">What Our  Clients Say</div>
    <div className="testimonial-container">
      
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="coverflow"
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        // effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        // breakpoints={{
        //   // when window width is <= 768px (for mobile)
        //   768: {
        //     slidesPerView: 1
        //   }
        // }}
        // pagination={{
        //   el: ".swiper-pagination",
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide style={{ height: "200px", width: "200px"}}>
          <div className="swiper-slide">
            <div className="quote">
              "Wow! Pizzatune is hands down the BEST pizza place in town. From
              the fast delivery service to all the types of pizza, pasta, and
              garlic bread your heart desires."
              <footer>-Sahil Sood</footer>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", width: "200px"}}>
          <div className="swiper-slide">
            <div className="quote">
              "Wow! Pizzatune is hands down the BEST pizza place in town. From
              the fast delivery service to all the types of pizza, pasta, and
              garlic bread your heart desires."
              <footer>-Sahil Sood</footer>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", width: "200px"}}>
          <div className="swiper-slide">
            <div className="quote">
              "Wow! Pizzatune is hands down the BEST pizza place in town. From
              the fast delivery service to all the types of pizza, pasta, and
              garlic bread your heart desires."
              <footer>-Sahil Sood</footer>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "200px", width: "200px"}}>
          <div className="swiper-slide">
            <div className="quote">
              "Wow! Pizzatune is hands down the BEST pizza place in town. From
              the fast delivery service to all the types of pizza, pasta, and
              garlic bread your heart desires."
              <footer>-Sahil Sood</footer>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Testimonial;
