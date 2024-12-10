import './App.css';
import { Route,Routes, useLocation } from 'react-router-dom';
import Home from '../componants/Home'
import Product from '../componants/Product';
import Navbar from '../componants/Navbar';
import Myboughts from '../componants/Myboughts';
import Homepage from '../componants/Homepage';
import Registration from '../componants/Registration';
function App() {
  const location =useLocation()
  const ShowNavbar = location.pathname !=='/'
  const ShowNavbarr = location.pathname !=='/Registration'
  const ShowNavbarrr = location.pathname !=='/Homepage'
  return (
    <div className='Box'>
      {ShowNavbar && ShowNavbarr && ShowNavbarrr && <Navbar/>}
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Myboughts' element={<Myboughts/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
