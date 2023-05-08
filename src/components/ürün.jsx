import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Urun = () => {
  const { id } = useParams(); //burada gönderdiğimiz id değerini alırız
  const [deger1, setDeger1] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://dummyjson.com/products/${id}`,
    }).then((res) => setDeger1(res.data));
  }, []);

  console.log(deger1);

  return (
    <div>
      <h1>{deger1.title}</h1>
      <p>{deger1.description}</p>
      <p>{deger1.price} TL</p>
    </div>
  );
};
