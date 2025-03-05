import React from 'react';


const MainPage = () => {
  const [WatchData, setWatchData] = React.useState("");
  const [Watcharr, setWatcharr] = React.useState("");

  let r = WatchData.split(' ')
  let arrayst = Watcharr.split(' ')


  let arr = arrayst.map(d => Number(d))
  let data = r.map(d => Number(d))


  let RLena = 0;
  let RSasha = 0;


  for (let i = 0; i < arr.length; i++) {
    if (1 <= data[0] || data[0] <= 1000 && 1 <= data[1] || data[1] <= Math.pow(10, 6)) {

      if (RLena == data[0] || RSasha == data[0]) {
        break;
      } else if (arr[i] % 5 == 0 && arr[i] % 3 == 0 || arr[i] % 3 != 0 && arr[i] % 5 != 0) {
        continue;
      } else if (arr[i] % 5 == 0) {
        RLena++;
      } else if (arr[i] % 3 == 0) {
        RSasha++;
      } else {
        console.log("error")
      }
    }
  }

  if (RLena > RSasha) {
    console.log("Lena")
  } else if (RLena < RSasha) {
    console.log("Sasha")
  } else if (RLena = RSasha) {
    console.log("tie")
  }

  return (

      <div className='max-w-7xl px-6 lg:px-8'>
        <p>условия:</p>
        <input type="numb" onChange={(e) => setWatchData(e.target.value)} id='1' defaultValue="3 10" />
        <p>метки:</p>
        <input type="numb" onChange={(e) => setWatcharr(e.target.value)} id='2' defaultValue="1 2 3 4 5 6 7 8 9 10" />
      </div>
  )
}
export default MainPage;