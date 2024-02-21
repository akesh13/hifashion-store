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
import mimg1 from "../../public/images/1.jpg";
import mimg2 from "../../public/images/2.jpg";
import mimg3 from "../../public/images/3.jpg";
import mimg4 from "../../public/images/4.jpg";
import mimg5 from "../../public/images/5.jpg";
import mimg6 from "../../public/images/6.jpg";
import mimg7 from "../../public/images/7.jpg";
import mimg8 from "../../public/images/8.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const images = [
  {
    id: 1,
    image: mimg1,
  },
  {
    id: 2,
    image: mimg2,
  },
  {
    id: 3,
    image: mimg3,
  },
  {
    id: 4,
    image: mimg4,
  },
  {
    id: 5,
    image: mimg5,
  },
  {
    id: 6,
    image: mimg6,
  },
  {
    id: 7,
    image: mimg7,
  },
  {
    id: 8,
    image: mimg8,
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
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide
            style={{
              borderRadius: "24px",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={image.id}
          >
            <Image
              src={image.image}
              width={400}
              height={500}
              style={{
                objectFit: "cover",
              }}
              alt="display"
            />
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
          <SwiperSlide
            style={{
              borderRadius: "24px",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={image.id}
          >
            <Image
              src={image.image}
              width={400}
              height={500}
              style={{
                objectFit: "cover",
              }}
              alt="display"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwipeableDisplay;
