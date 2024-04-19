import { Box, Divider, Typography,styled } from "@mui/material";
import React from "react";

const NewsHeaders= styled("Typography") (({theme}) => ({
        fontSize:"13.5px",
        color: "#585656",
        letterSpacing:"0.4px",
        fontWeight:"500",

}));

const NewsDate = styled("Typography") (({theme}) => ({

    fontSize:"12.5px",
    color:"#757575",
   
    
}));

export default function News(){

    return(
        <>
        <Box padding="10px">
        <Typography variant="p" color="#0094f2" fontWeight={500} letterSpacing="0.7px" alignContent="center">Domestic</Typography>

        <Box>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Countrys metal sector growing in double digits Indian Institute of Metalsvice president Sajjan Jindal</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 23.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>SAIL initiates deleveraging ahead of 1-lakh-cr capex</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 24.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Ethanol a green fuel - The Hindu BusinessLine</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 24.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Govt plans to ask ONGC to consider $1.9 billion rights issue to fund HPCL</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 23.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>
            
            <br />
            <Typography variant="p" color="#0094f2" fontWeight={500} letterSpacing="0.7px">Green Chemicals/Green Capture New</Typography>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Push to green energy in U.P 19 solar biogas plants worth 18831 cr granted land ahead of groundbreaking ceremony</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 22.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Tamil Nadu in process of developing green hydrogen hub Industries Minister Rajaa</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 23.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Australia to significantly bolster green energy investment</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 23.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

            <br />

            <Typography variant="p" color="#0094f2" fontWeight={500} letterSpacing="0.7px">International</Typography>

            <Box padding="15px 15px 0px 0px">
            <NewsHeaders>Saudi Arabia May Make Oil Cuts Prices Could Soar Expert</NewsHeaders>
            <Box  paddingTop="5px">
            <NewsDate>News Date 24.11.2023</NewsDate>
            </Box>
            <br />
            <Divider/>
            </Box>

    


        </Box>
        </Box>
        </>
    )
}