


import { TextField } from "@mui/material";

 interface FeldMacineProps {
     place: String
 }


const FeldMacine = (props: FeldMacineProps) => {
 return <TextField>
    value={props.place}
 </TextField>
 
}

export default FeldMacine;