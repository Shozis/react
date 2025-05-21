import React from "react"
import NumbMachne from "../components/NumbMachne"


import { Box, Typography } from "@mui/material"
import { count } from "console"



const VendingMachine = () => {
    const counter = (value: number) =>{

    }

    const [Watchcounter, setWatchcounter] = React.useState(count);


    return <Box>
        <NumbMachne count={counter}/>
    </Box>
}

export default VendingMachine;  