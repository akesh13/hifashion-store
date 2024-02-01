"use client";
import theme from "@/theme";
import { AppBar, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
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
      <AppBar sx={{ display: "flex" }}>
        <Box>wtf this is not working</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            columnGap: 4,
          }}
        >
          {menus.map((menu) => (
            <React.Fragment key={menu.id}>
              <Typography onClick={() => router.push(`${menu.href}`)}>
                {menu.name}
              </Typography>
            </React.Fragment>
          ))}
        </Box>
      </AppBar>
    </>
  );
}

export default NavigationMenuBar;
