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

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const { Meta } = Card;

function Home() {
  const [sepett, setSepet] = useState([]); //sepet adında use state dizisi oluşturuldu bu diziye ... operatörü ile ekleme yapacağız.
  
  const sepeteEkle = (eklenenurun) => {
    setSepet([...sepett, eklenenurun]);
  }
  
  const [deger, setDeger] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    }).then((res) => setDeger(res.data.products));
  }, []);

  {sepett.map((item) => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
    </div>
  ))}

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
          renderItem={(item) => (
            <List.Item>
              <Link to={`/products/${item.id}`}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}
                  cover={<img alt="example" src={item.images} />}
                >
                  <Meta title={item.title} description={item.description} />
                  <Meta
                    style={{ marginBottom: "10px" }}
                    title={` ${item.price}.00 tl`}
                    description={<Rate disabled defaultValue={item.rating} />}
                  />

                 
                    
                    <Tooltip title="SEPETE EKLE">
                      <Button onClick={()=>sepeteEkle()}
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
              </Link>
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
