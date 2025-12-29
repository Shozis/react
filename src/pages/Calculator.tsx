import React from "react";
import BtnCalculate from "../components/BtnCalculate";
import { Box, TextField } from "@mui/material";



const Calculator = () => {

    const [counter, setCounter] = React.useState(" ");

    const logic = (value: string) => {
        setCounter(counter + value.toString())
    }

    const ce = () => {
        setCounter("");
    }

    const result = () => {
        const nums = counter.split(" ")
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] % 2 === 0) {
                
            }
        }
    }




    return <Box sx={{

    }}>
        <TextField sx={{
            display: 'flex',
            justifyContent: 'center'
        }} value={counter}></TextField>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 200
        }}>
            <Box sx={{
            }}>
                <BtnCalculate
                    value="1"
                    back={logic}
                />
                <BtnCalculate
                    value="2"
                    back={logic}
                />
                <BtnCalculate
                    value="3"
                    back={logic}
                />
            </Box>
            <Box>
                <BtnCalculate
                    value="4"
                    back={logic}
                />
                <BtnCalculate
                    value="5"
                    back={logic}
                />
                <BtnCalculate
                    value="6"
                    back={logic}
                />
            </Box>
            <Box>
                <BtnCalculate
                    value="7"
                    back={logic}
                />
                <BtnCalculate
                    value="8"
                    back={logic}
                />
                <BtnCalculate
                    value="9"
                    back={logic}
                />
            </Box>
            <Box>
                <BtnCalculate
                    value="ce"
                    back={ce}
                />
                <BtnCalculate
                    value="0"
                    back={logic}
                />
                <BtnCalculate
                    value="="
                    back={result}
                />
            </Box>
        </Box>
        <Box>
            <BtnCalculate
                value=" * "
                back={logic}
            />
            <BtnCalculate
                value=" / "
                back={logic}
            />
            <BtnCalculate
                value=" + "
                back={logic}
            />
            <BtnCalculate
                value=" - "
                back={logic}
            />
        </Box>
    </Box>
}


export default Calculator;