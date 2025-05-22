import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Find Roommates Near You",
    desc: "Match with people in your city based on shared living preferences.",
    img: "https://i.ibb.co/vxBq78Jv/istockphoto-2169450299-612x612.jpg",
  },
  {
    title: "Stay Within Budget",
    desc: "Filter by budget range and split rent with ease.",
    img: "https://i.ibb.co/bj24v741/download.jpg",
  },
  {
    title: "Match Lifestyles",
    desc: "Early bird? Night owl? We’ve got the right match for your habits.",
    img: "https://i.ibb.co/dw3nDB3g/download.jpg",
  },
  {
    title: "Connect with Shared Interests",
    desc: "Love cooking or gaming? Find someone who vibes with you.",
    img: "https://i.ibb.co/pv2pBnWc/images.jpg",
  },
];

const Slider = () => {
  return (
    <div className="w-11/12   mx-auto py-12 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-100 rounded-2xl  w-full p-8 shadow-xl flex flex-col items-center text-center gap-5">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-[100%] rounded-2xl lg:h-[500px] "
              />
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-gray-500 max-w-xl">{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
