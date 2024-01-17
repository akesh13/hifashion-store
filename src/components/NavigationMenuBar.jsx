import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

const menu = [
    {
        id:"men",
        name:"For Him",
        href:"/men"
    },
    {
        id:"women",
        name:"For Her",
        href:"/womens"
    },
    {
        id:"accessories",
        name:"Accessories",
        href:"/accessories"
    },
]

function NavigationMenuBar() {
  return (
    <AppBar sx={{display:"inline-flex", justifyContent:"space-between", alignItems:"center", flexWrap:"nowrap"}}>
        <Box>
        <Typography variant='h1'>hi.fashion</Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            {
                menu.map((menu) => (
                    <React.Fragment key={menu.id}>
                        <Typography>{menu.name}</Typography>
                    </React.Fragment>
                ))
            }

        </Box>
    </AppBar>
  )
}

export default NavigationMenuBar