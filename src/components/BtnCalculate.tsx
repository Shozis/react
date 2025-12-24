

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


    return <div>
        {arr.map((arr, key) => (
            <button
                onClick={() => name(key)}
                key={key}
            >
                {arr}
            </button>
        ))}
    </div>
}


export default BtnCalculate;