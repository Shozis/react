import React from "react";


const Massive = () => {
    debugger;

    const [WatchMassive, setWatchMassive] = React.useState(''); // <- Начальное условие забываешь добавить
    const [WatchNumb, setWatchNumb] = React.useState('');

    let reversM = WatchMassive.split(' ');
    let reversN = WatchMassive.split(' ');

    let ind = [];
    let cout = 0;

    let Massive = reversM.map(d => Number(d))
    let numb = +WatchNumb;

    debugger;

    for (let i = 0; i < Massive.length; i++) {
        if (Massive[i] == numb) {
            cout ++;
            ind.push(i);
        }else {
            continue;
        }
    }

    console.log(cout);
    console.log(ind);

    return (
        <div>
            <input type="numb" onChange={(e) => setWatchMassive(e.target.value)} id='1' defaultValue="4 4 8 64 35 55 53 51 21 36" 
            style={{
                width: '200px',
            }}
            />
            <input type="numb" onChange={(e) => setWatchNumb(e.target.value)} id='2' defaultValue="4" />
        </div>
    )
}

export default Massive;