import React from "react";


const Years = () => {
    let year = 0;
    const [WatchYear, setWatchYear] = React.useState("2025");

    if (Number(WatchYear) % 4 == 0) {
        console.log("Год високосный")
    } else if (Number(WatchYear) % 100 != 0) {
        console.log("Год не високосный")
    } else if (Number(WatchYear) % 400 == 0) {
        console.log("Год високосный")
    }

    return (
        <div>
            <input type="numb" onChange={(e) => setWatchYear(e.target.value)} id='1' defaultValue={WatchYear} />
        </div>
    )
}



export default Years;