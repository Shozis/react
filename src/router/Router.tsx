import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';
import Years from '../pages/Years';
import Massive from '../pages/Massive';
import Calculator from "../pages/Calculator"
import Applicate from '../pages/Applicate';
import VendingMachine from '../pages/VendingMachine';
import Poradok from '../pages/Poradok'
import Coder from '../pages/Coder';

const Router = () => {
  return (
    <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/second" index element={<SecondPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/years" element={<Years />} />
        <Route path="/massive" element={<Massive />} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/maket' element={<Applicate/>} />
        <Route path='/food' element={<VendingMachine/>} />
        <Route path='/poradok' element={<Poradok/>} />
        <Route path='/coder' element={<Coder/>} />
    </Routes>
  )
}

export default Router;
