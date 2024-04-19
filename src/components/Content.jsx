import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import News from "./Newscomponent";
import Comoditiesdata from "./commodities";

export default function Content(){

    return(
        <>
        <Box margin="30px 15px">
            <Box>
            <Typography variant="p" fontSize={14} fontWeight={600}>Dear Colleagues,</Typography><br />
            <Box marginTop={2}>
            <Typography variant="p" color="#5f5c5c" marginTop={5} fontSize={14}>Following are the key announcements from the world of chemicals, projects and chemical process industries
             along with prices of Major Foreign Exchange, Oil & Gas and Metals in Graphical form:</Typography>
        </Box>
        </Box>
        <br /> 
          <br />
        <Typography variant="p"  letterSpacing="0.5px" fontWeight="500" fontSize="14px" color="#686868" >News & Commodities Details</Typography>
        <br />   <br /> 

        <Box sx={{bgcolor:"#fff",borderRadius:"15px", height:"auto", padding:"30px",boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;"}}>
        <Stack direction="row">

            <Box flex={5} height="auto" > 
                <News />
            </Box>

            <Box flex={4} height="auto" > 
            <Comoditiesdata />
            </Box>


        </Stack>        
        </Box>
        </Box>
        </>

    )
}