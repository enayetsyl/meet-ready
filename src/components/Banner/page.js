"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";

const page = () => {
  return (
  
      <>
        <section>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
            loading = 'lazy'
            quality={100}
              src="https://i.ibb.co/19mXW8C/laptops-593296-1280.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            loading = 'lazy'
               quality={100}
              src="https://i.ibb.co/r2gm0yY/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            loading = 'lazy'
               quality={100}
              src="https://i.ibb.co/YTV9VX3/austin-distel-g-UIJ0-Ysz-Pig-unsplash.jpg"
              width={1000}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          
        </Swiper>
      </section>
      </>
      

  );
};

export default page;

{/* <SwiperSlide>
            <Image
            
              layout="responsive"
              src="https://i.ibb.co/zGWV9GW/alesia-kaz-VWc-Plb-Hgl-Yc-unsplash.jpg"
              width={500}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              
              layout="responsive"
              src="https://i.ibb.co/qDVGHTR/calendar-1990453-1280.jpg"
              width={500}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              
              layout="responsive"
              src="https://i.ibb.co/CH8ww26/job-5382501-1280.jpg"
              width={500}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
             
              layout="responsive"
              src="https://i.ibb.co/hmh3kLc/pexels-canva-studio-3153201.jpg"
              width={500}
              height={500}
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
             
              layout="responsive"
              src="https://i.ibb.co/fvgqpzY/pexels-sora-shimazaki-5673488.jpg"
              width={500}
              height={500}
              alt="logo"
            />
          </SwiperSlide> */}