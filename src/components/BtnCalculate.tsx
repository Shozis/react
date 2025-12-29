import { Box, Button, TextField } from "@mui/material";


interface BtnCalculateProps {
    back: (value: string) => void
    value: string;
}



const BtnCalculate = (props: BtnCalculateProps) => {
    const nameBtn = () => {
        props.back(props.value);
    }

    return <Button sx={{
        width: 10,
        border: 1
    }}
        onClick={nameBtn} > 
            {props.value}
        </Button>

}

export default BtnCalculate;