"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  {
    id: 1,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 5,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 6,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 7,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 8,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 9,
    image: "https://picsum.photos/300/200",
  },
];

function SwipeableDisplay() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image src={image.image} width={200} height={300} alt="display" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwipeableDisplay;
