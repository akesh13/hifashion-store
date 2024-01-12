"use client"
import {createTheme} from "@mui/material/styles"
const theme = createTheme({
    typography:{
        h1:{
           
        }
            },
components:{
    MuiButton:{
        styleOverrides:{
            root:{
                borderRadius:"100%",
                "&:hover":{
                    backgroundColor:"red"
                }
            }
        }
    }
}
})

export default theme