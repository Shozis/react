import React from "react"
import NumbMachne from "../components/NumbMachne"


import { Box, Typography } from "@mui/material"
import FeldMacine from "../components/FeldMacine"




const VendingMachine = () => {


    const [Watchcounter, setWatchcounter] = React.useState('');

    const counter = (value: number) => {
        setWatchcounter(Watchcounter + value.toString());

        console.log(Watchcounter);

    }

    return <Box>
        <NumbMachne count={counter} />
        <FeldMacine place={Watchcounter} />
    </Box>
}

export default VendingMachine;  