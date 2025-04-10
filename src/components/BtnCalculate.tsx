import React from "react";


interface BtnCalculateProps{
name : (number)
}

const BtnCalculate = (props: BtnCalculateProps) => {
    return <button>
        {props.name}
    </button>

}
export default BtnCalculate;