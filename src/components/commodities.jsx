import { Box, Stack, Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,  Paper } from "@mui/material"
import React from "react"




export default function Comoditiesdata(){
    return(
        <>
        <Box padding="10px">
        <Stack direction="row" justifyContent="space-between">
        <Typography variant="p" color="#0094f2" fontWeight={500} letterSpacing="0.7px" alignContent="center">Commodities Details</Typography>
        <Typography variant="p" textAlign="center" color="#0094f2" fontSize="14.5px" padding="8px 25px" border="1px solid #0094f2" borderRadius="11px" letterSpacing="0.7px">Fri, 24 Apr, 2024</Typography>
        </Stack>

        <Box padding="35px"  margin="20px 0px" border="1px solid #cbcbcb">
            <Typography variant="p" fontSize="14px" color="#3b3b3b" letterSpacing="0.5px" textTransform="uppercase" fontWeight={400}> Foreign Exchange</Typography>
            <br />  <br />
            <TableContainer component={Paper} sx={{ boxShadow: 'none !important' }}>
            <Table   aria-label="simple table">
                <TableHead>
                <TableRow bgcolor="#0094f2" >
                    <TableCell sx={{ padding: '8px' }}></TableCell>
                    <TableCell sx={{ padding: '8px',color:"#fff" }}align="right">Price(₹)</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"#fff" }} align="center">Change</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                    <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>US Dollar</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">83.32</TableCell>
                    <TableCell  sx={{ padding: '8px' }} align="center">  <img  src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                    </TableCell>
                    </TableRow>

                    <TableRow bgcolor="#f5f5f5">
                    <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>Euro</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">90.04</TableCell>
                    <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                    </TableCell>
                    </TableRow>

                    <TableRow >
                    <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>Japenese Yen</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">55.83</TableCell>
                    <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                    </TableCell>
                    </TableRow>

                    
                </TableBody>
            </Table>
    </TableContainer>


    <br />  <br />

    <Typography variant="p" fontSize="14px" color="#3b3b3b" letterSpacing="0.5px" textTransform="uppercase" fontWeight={400}> Oil & Gas Prices</Typography>
            <br />  <br />
            <TableContainer component={Paper} sx={{ boxShadow: 'none !important' }}>
            <Table   aria-label="simple table">
                <TableHead>
                <TableRow bgcolor="#0094f2" >
                    <TableCell sx={{ padding: '8px' }}></TableCell>
                    <TableCell sx={{ padding: '8px',color:"#fff" }}align="right">Price($)</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"#fff" }} align="center">Change</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                    <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>Brent Crude (USD/bbl)</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">81.39</TableCell>
                    <TableCell  sx={{ padding: '8px' }} align="center">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Q9KdhHVTHOcSr7V5dBJnPV9lAB5bKFJZDU8pIwCOeQ&s" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                    </TableCell>
                    </TableRow>

                    <TableRow bgcolor="#f5f5f5">
                    <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>NaturalGas (USD/MMBtu)</TableCell>
                    <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">90.04</TableCell>
                    <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                    </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
    </TableContainer>


    <br />  <br />

    <Typography variant="p" fontSize="14px" color="#3b3b3b" letterSpacing="0.5px" textTransform="uppercase" fontWeight={400}>Metal Prices</Typography>
        <br />  <br />
        <TableContainer component={Paper} sx={{ boxShadow: 'none !important' }}>
        <Table   aria-label="simple table">
            <TableHead>
            <TableRow bgcolor="#0094f2" >
                <TableCell sx={{ padding: '8px' }}></TableCell>
                <TableCell sx={{ padding: '8px',color:"#fff" }}align="right">Price</TableCell>
                <TableCell  sx={{ padding: '8px',color:"#fff" }} align="center">Change</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>LME Copper</TableCell>
                <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">$ 8,412.5</TableCell>
                <TableCell  sx={{ padding: '8px' }} align="center">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Q9KdhHVTHOcSr7V5dBJnPV9lAB5bKFJZDU8pIwCOeQ&s" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                </TableCell>
                </TableRow>

                <TableRow bgcolor="#f5f5f5">
                <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>LME Aluminium</TableCell>
                <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">$ 2,223.5</TableCell>
                <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>LME Zinc</TableCell>
                <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">$ 2,545.0</TableCell>
                <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                </TableCell>
                </TableRow>

                <TableRow bgcolor="#f5f5f5">
                <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>LME Nickel</TableCell>
                <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">$ 16,550.0</TableCell>
                <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>LME Lead</TableCell>
                <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">$ 2,225.5</TableCell>
                <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Arrow_Up.svg" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                </TableCell>
                </TableRow>

                <TableRow bgcolor="#f5f5f5">
                <TableCell  sx={{ padding: '8px',margin:"0px", fontSize:"13px", letterSpacing:"0.6px", fontWeight:"500",color:"#0094f2"}}>LME Tin</TableCell>
                <TableCell  sx={{ padding: '8px',color:"grey",fontSize:"13px", fontWeight:"500" }} align="right">$ 24,110.0</TableCell>
                <TableCell  sx={{ padding: '8px' }} align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png" alt="Green Arrow Up" style={{ width: '13px', height: '13px' }} />
                </TableCell>
                </TableRow>

            </TableBody>
        </Table>
</TableContainer>


        </Box>
        </Box>
        </>
    )
}