import React from "react";
import Anasayfa from "./pages/Home";
import Contact from "./pages/Contact";
import Hakimizda from "./pages/Hakkimizda";
import { Route, Routes } from "react-router-dom";
import { Urun } from "./components/ürün";
import Sepet from "./components/Sepet";
import  {  useState,useEffect } from "react";
import Header from "./layout/Header";


function Router() {  
  const [sepetCount, setSepetCount] = useState("")


  const change=(myDeger)=>{
      setSepetCount(myDeger)

    }
    console.log(sepetCount);



  return (
    <>
    <Header  count={sepetCount}    />

      <Routes>
        <Route index element={ <Anasayfa change={change} />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="hakkimizda" element={<Hakimizda />} /> // *Hakkımızda sayfasının yolu hakkimizda oldu/ 
        <Route path="/products/:id" element={<Urun />} />
        <Route path="/sepet" element={<Sepet />} />
        
      </Routes>
    </>
  );
}

export default Router;
