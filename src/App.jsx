import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home'
import CarDetails from './Pages/CarDetails'
import Cars from './Pages/Cars'
// import MyBookings from './Pages/MyBookings'
import Hero from './Components/Hero';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const isOwnerpath = location.pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerpath && <Navbar setShowLogin={setShowLogin} />}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>} />
        <Route path='/cars' element={<Cars/>}/>
        {/* <Route path='/my-bookings' element={<MyBookings/>}/> */}
        <Route path='/hero'element={<Hero/>}/>

      </Routes>
    </>
  );
};

export default App;
