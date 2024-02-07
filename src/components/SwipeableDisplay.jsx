"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 4,
          maxWidth: "90%",
          overflowX: "scroll",
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.image} width={200} height={300} alt="display" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwipeableDisplay;
