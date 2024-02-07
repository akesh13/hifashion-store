"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import banner from "../../public/images/traditional-women.jpg";

function HeroBanner() {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Vanity",
          fontSize: "52px",
          lineHeight: "52px",
          textAlign: "center",
          padding: "24px",
        }}
      >
        Luxorious and contempory appeal <br /> for everyone
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={banner}
          alt="banner-image"
          style={{
            height: "80dvh",
            width: "80%",
            objectFit: "cover",
            alignSelf: "center",
          }}
        />
      </Box>
    </>
  );
}

export default HeroBanner;
