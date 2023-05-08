import React from "react";
import Anasayfa from "./pages/Home";
import Contact from "./pages/Contact";
import Hakimizda from "./pages/Hakkimizda";
import { Route, Routes } from "react-router-dom";
import { Urun } from "./components/ürün";
import Sepet from "./components/Sepet";

function Router() {
  return (
    <>
      <Routes>
        <Route index element={<Anasayfa />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="hakkimizda" element={<Hakimizda />} /> // *Hakkımızda sayfasının yolu hakkimizda oldu/ 
        <Route path="/products/:id" element={<Urun />} />
        <Route path="/sepet/:id"  element={<Sepet/>}   />
      </Routes>
    </>
  );
}

export default Router;
