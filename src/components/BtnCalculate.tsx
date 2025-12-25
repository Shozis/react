import { Box, Button, TextField } from "@mui/material";


interface BtnCalculateProps {
    back: (value: number) => void
}



const BtnCalculate = (props: BtnCalculateProps) => {
    const name = (value: number) => {
        props.back(value);
    }
    const arr = [];

    for (let i = 0; i <= 9; i++) {
        arr[i] = i
    }


    return <Box>
        <TextField sx={{
            display: 'flex',
            justifyContent: 'center'
        }}></TextField>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            {arr.map((arr, key) => (
                <Button sx={{
                    border: 1
                }}
                    onClick={() => name(key)}
                    key={key}
                >
                    {arr}
                </Button>
            ))}
        </Box>
    </Box>
}


export default BtnCalculate;