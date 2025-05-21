import { Box, Button } from "@mui/material"



interface NumbMachneProps{
    count: (value: number) => void
}

const NumbMachne = (props: NumbMachneProps) => {
    const name = (value: number) => {
        props.count(value);
    }
    const arr = [];

    for (let i = 0; i <= 9; i++) {
        arr[i] = i
    }
    return <Box>
        {arr.map((arr, key) => (
            <Button sx={{
                border: '1px solid black'
            }}
                onClick={() => name(key)}
                key={key}
            >
                {arr}
            </Button>
        ))}
    </Box>
}

export default NumbMachne;