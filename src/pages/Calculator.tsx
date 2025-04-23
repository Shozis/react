
import BtnCalculate from "../components/BtnCalculate";

const Calculator = () => {

    const logic = (value: number) =>{
        console.log(value)
    }

return <BtnCalculate 
    back={logic}

/>
}

export default Calculator;