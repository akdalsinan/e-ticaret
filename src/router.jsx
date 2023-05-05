import React from 'react'
import Anasayfa from "./pages/Home";
import Contact from "./pages/Contact";
import Hakimizda from "./pages/Hakkimizda";
import { Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <>
    <Routes>
        < Route index element={<Anasayfa/>}/>
        <Route path='iletisim' element={<Contact/>}/>
        <Route path='hakkimizda' element={<Hakimizda/>}/> // *Hakkımızda sayfasının yolu hakkimizda oldu/
    </Routes>
    
    
    </>
  )
}

export default Router