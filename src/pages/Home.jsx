import React, { useEffect, useState } from "react";
import {
  Carousel,
  Card,
  Icon,
  Avatar,
  Tooltip,
  Button,
  List,
  Rate,
} from "antd";

import {
  ShoppingCartOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import axios from "axios";
import MyCarouse from "../components/MyCarouse";
import { NavLink, Router, Link } from "react-router-dom";
import Sepet from "../components/Sepet";



const { Meta } = Card;

function Home({ change ,sepet}) {
  const [sepett, setSepet] = useState([]); //sepet adında use state dizisi oluşturuldu bu diziye ... operatörü ile ekleme yapacağız.

  const sepeteEkle = (index) => {
    const newDeger = deger.filter((e, i) => i === index);

    setSepet([...sepett, ...newDeger]);

  };


  change(sepett.length ); 
  sepet(sepett);

  const [deger, setDeger] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    }).then((res) => setDeger(res.data.products));
  }, []);


  return (
    <div>  
 
      <MyCarouse />
   

      <div className="listDiv">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={deger}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                className="card"
                hoverable
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src="data:image/jpeg;base64,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gkavy9nvEZez3iciLzXOtc4y9nvE5A7B6xF5yJkHUjunpSIBuRfs3DxnUkDfJ7ZPI/G1yLUmRT9KqDTUDrsdW8AYSb0ITqwpq82ku1/1c27yRqs+Dw7tvakCfHWTMwdk4EUKFOgCSKdNUud5yi1/GZ06SVkjxlSSlNtb2/MRETJAREQBERAEREAREQBERAEREAREQBIvbuwcPjKfN4imHHA7mU9asNQZKRANH8ofJFjlqFsFiEekdy1WNN17LhSG79O6ZPJLyUYrnc+0Kq80F0p0ajlmYiwzPYZQN+l726t+54kcMeBaq9Vf5Pmykfyt2d6Nb+vU+Mfyt2d6Nb+vU+Mu8RgjwHxFX7nzZR/5WbN9Gt/Xq/Gdv5WbM9Cr/Xrful2iMEeBn4ir975spX8rtm/V1P69b904/lZsz0Kv9et+6XaIwR4D4ir9z5spX8rdm+hW/wDIrfunH8rdm+jW/wDIrful2iMEeBjr6v3PmzUPLHyUVSVfZtQKLWelWqVDc3PTVzmN9wynTS8h9j+SPaTOP4mvRp079LKz1XPYFso8c03tEzhXAdfV+582QGweSmEwaqKVJS4GtVwrVW6yXtcdwsJPxEyVttu7EREGBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP//Z" />}
              >
                <Link to={`/products/${item.id}`}>
                  <Meta title={item.title} description={item.description} />
                  <Meta
                    style={{ marginBottom: "10px" }}
                    title={` ${item.price}.00 tl`}
                    description={<Rate disabled defaultValue={item.rating} />}
                  />
                </Link>
                <Tooltip title="SEPETE EKLE">
                  <Button
                    onClick={() => sepeteEkle(index)}
                    style={{ width: "73px", marginRight: "8px" }}
                    icon={<ShoppingCartOutlined />}
                  />
                </Tooltip>

                <Tooltip title="FAVORİ EKLE">
                  <Button
                    style={{ width: "73px", marginRight: "9px" }}
                    icon={<HeartOutlined />}
                  />
                </Tooltip>

                <Tooltip title="PAYLAŞ">
                  <Button
                    style={{ width: "73px", marginRight: "9px" }}
                    icon={<ShareAltOutlined />}
                  />
                </Tooltip>
              </Card>
            </List.Item>
          )}
        />
      </div>

      {/* {deger.map((result,index)=>
    {
        return(
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
        )
    })} */}
    </div>
  );
}

export default Home;
