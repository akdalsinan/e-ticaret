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

function Home({ change }) {
  const [sepett, setSepet] = useState([]); //sepet adında use state dizisi oluşturuldu bu diziye ... operatörü ile ekleme yapacağız.

  const sepeteEkle = (index) => {
    const newDeger = deger.filter((e, i) => i === index); 
    setSepet([...sepett, newDeger]);

  };

  change(sepett.length ); 

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
                cover={<img alt="example" src={item.images} />}
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
