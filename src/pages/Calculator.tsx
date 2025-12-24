
import React from "react";
import BtnCalculate from "../components/BtnCalculate";
import { Box } from "@mui/material";



const Calculator = () => {

    const [counter, setCounter] = React.useState(" ");

    const logic = (value: number) => {
        setCounter(counter + value.toString())
    }

    return <Box>
        <BtnCalculate
            back={logic}
        />
        {counter}
    </Box>
}

export default Calculator;
