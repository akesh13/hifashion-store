"use client";
import theme from "@/theme";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import React from "react";

const menus = [
  {
    id: "men",
    name: "For Him",
    href: "/men",
  },
  {
    id: "women",
    name: "For Her",
    href: "/womens",
  },
  {
    id: "accessories",
    name: "Accessories",
    href: "/accessories",
  },
];

function NavigationMenuBar() {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        sx={{
          padding: "18px 48px",
        }}
      >
        <Grid item md={4} lg={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
              columnGap: 4,
            }}
          >
            {menus.map((menu) => (
              <React.Fragment key={menu.id}>
                <Typography
                  fontSize={"14px"}
                  fontWeight={theme.typography.fontWeightMedium}
                  onClick={() => router.push(`${menu.href}`)}
                >
                  {menu.name}
                </Typography>
              </React.Fragment>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "henri",
              // fontWeight: 800,
              fontSize: "24px",
            }}
          >
            HI FASHION
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              columnGap: 4,
              fontSize: 18,
            }}
          >
            <CiSearch />
            <CiUser />
            <CiShoppingCart />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default NavigationMenuBar;
