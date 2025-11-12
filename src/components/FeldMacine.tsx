import { TextField } from "@mui/material";

 interface FeldMacineProps {
     place: number
 }


const FeldMacine = (props: FeldMacineProps) => {
 return <TextField
 value={props.place}/> 
}

export default FeldMacine;