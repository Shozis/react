import AppLayout from '../layouts/Layout'

const MainPage = () => {


  const info = '3 10';
  const marks = '1 2 3 4 5 6 7 8 9 10';

  let r = info.split(' ')
  let arrayst = marks.split(' ')


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
    <AppLayout>
      <div className='max-w-7xl px-6 lg:px-8'>
        Ого
      </div>
    </AppLayout>
  )
}
export default MainPage;