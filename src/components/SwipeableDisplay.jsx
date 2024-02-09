"use client";
import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

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
      <Typography
        sx={{
          fontFamily: "earfline",
          fontWeight: "",
          fontSize: "48px",
        }}
      >
        For Him
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        centeredSlides
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image src={image.image} width={400} height={500} alt="display" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Typography
        sx={{
          fontFamily: "earfline",
          fontWeight: "",
          fontSize: "48px",
        }}
      >
        For Her
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box
              sx={{
                border: "4px solid black",
              }}
            >
              <Image src={image.image} width={400} height={500} alt="display" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwipeableDisplay;
