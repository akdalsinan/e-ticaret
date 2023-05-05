import React, { useEffect,useState } from "react";
import { Carousel, Card, Icon, Avatar, Tooltip, Button } from "antd";

import {
  ShoppingCartOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import bilg from "../image/bilg.jpg";
import shop from "../image/shop.png";
import axios from "axios";

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const { Meta } = Card;

function Home() {

   const [deger, setDeger] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    }).then((res) => setDeger( res.data.products));
  }, []);

  console.log("deger",deger)
  

  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            style={{ textAlign: "center", width: "100%", height: "500px" }}
            src={shop}
            alt=""
          />
        </div>

        <div style={{}} className="contentStyle">
          <img
            style={{ textAlign: "center", width: "100%", height: "500px" }}
            src={bilg}
            alt=""
          />
        </div>

        <div className="contentStyle">
          <img
            style={{ textAlign: "center", width: "100%", height: "500px" }}
            src={bilg}
            alt=""
          />
        </div>

        <div className="contentStyle">
          <img
            style={{ textAlign: "center", width: "100%", height: "500px" }}
            src={bilg}
            alt=""
          />
        </div>
      </Carousel>

    

    {deger.map((result,index)=>
    {
        return(
          <div style={{ margin: "50px" }} className="cardDiv">
          <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src={result.images}
              />
            }
          >
            <Meta title={result.title} description={result.description} />
            <Meta style={{ marginBottom: "10px" }} title={ `${result.price}.00 tl`}  />
  
            <Tooltip title="SEPETE EKLE">
              <Button
                style={{ width: "73px", marginRight: "10px" }}
                icon={<ShoppingCartOutlined />}
              />
            </Tooltip>
  
            <Tooltip title="FAVORİ EKLE">
              <Button
                style={{ width: "73px", marginRight: "10px" }}
                icon={<HeartOutlined />}
              />
            </Tooltip>
  
            <Tooltip title="PAYLAŞ">
              <Button
                style={{ width: "73px", marginRight: "10px" }}
                icon={<ShareAltOutlined />}
              />
            </Tooltip>
          </Card>
        </div>
          
        )



    })}


    



    </div>
  );
}

export default Home;
