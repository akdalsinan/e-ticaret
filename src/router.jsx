import React from "react";
import Anasayfa from "./pages/Home";
import Contact from "./pages/Contact";
import Hakimizda from "./pages/Hakkimizda";
import { Route, Routes } from "react-router-dom";
import { Urun } from "./components/ürün";
import Sepet from "./components/Sepet";
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Oturum from "./components/Oturum";

function Router() {
  const [sepetCount, setSepetCount] = useState("");
  const [sepet, setSepet] = useState([]);

  const change = (myDeger) => {
    setSepetCount(myDeger);
  };


  const mySepet=(urun)=>{

    setSepet(urun);
  }



  return (
    <>
      <Header count={sepetCount} />

      <Routes>
        <Route index element={<Anasayfa change={change} sepet={mySepet} />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="hakkimizda" element={<Hakimizda />} />      
        <Route path="/products/:id" element={<Urun />} />
        <Route path="/sepet" element={<Sepet sepetArray={sepet}  />} />
        <Route path="/oturum" element={<Oturum/>} />
      </Routes>
    </>
  );
}

export default Router;
