import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export default function MainLayout({isLoggedIn, setIsLoggedIn}) {
  return (
    <div >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Outlet />
      <Footer />
    </div>
  );
}
