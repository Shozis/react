import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';
import Years from '../pages/Years';
import Massive from '../pages/Massive';
import Layout from '../pages/Layout';

const Router = () => {
  return (
    <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/second" index element={<SecondPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/years" element={<Years />} />
        <Route path="/massive" element={<Massive />} />
        <Route path='/layout' element={<Layout/>} />
    </Routes>
  );
};

export default Router;
