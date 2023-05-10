import React from "react";
import { UserOutlined,PhoneOutlined,CommentOutlined } from '@ant-design/icons';
import { Input,Button } from 'antd';

function Contact() {
  return (
    <div>

      <h1 style={{textAlign:"center",margin:"100px"}}> Bizimle İletişime Geçin</h1>
      <h3 style={{textAlign:"center",margin:"100px"}}> Dilek,şikayet ve önerilerinizin bizim çin önemlidir</h3>
      <div style={{display:"flex",backgroundColor:"black",width:"1250px",height:"450px",marginLeft:"300px",marginBottom:"111px"}}>
      <iframe className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82323.59832791616!2d32.81314076428173!3d39.933134469359985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e95e58cebdd%3A0xb0a487ed057c548a!2zQU5LQW1hbGwgQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2str!4v1683702049612!5m2!1str!2str"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form style={{width:"600px",height:"450px" }}>
        <h1 style={{color:"white",textAlign:"center"}}> Online AVM İletişim </h1>
      <Input style={{margin:"20px"}} size="large" placeholder="İsim Soyisim" prefix={<UserOutlined />} />
      <Input style={{margin:"20px"}} size="large" placeholder="Mesaj" prefix={<CommentOutlined />} />
      <Input style={{margin:"20px"}} size="large" placeholder="Telefon Numarası" prefix={<PhoneOutlined />} />
      <Button style={{margin:"20px"}} type="primary" danger>
      GÖNDER
    </Button>


      </form>
</div>

    </div>
  );
}

export default Contact;
