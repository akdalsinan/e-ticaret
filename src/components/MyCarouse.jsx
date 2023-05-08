import React from "react";
import { Carousel } from "antd";

import bilg from "../image/bilg.jpg";
import shop from "../image/shop.png";

function MyCarouse() {
  return (
    <div className="carouseDiv">
      <Carousel className="carouseDivv" autoplay
      >
        <div>
          <img
            style={{ width:"100%", height: "500px" }}
            src={shop}
            alt=""
          />
        </div>

        <div style={{}} className="contentStyle">
          <img
            style={{  width:"100%" ,height: "500px" }}
            src={"https://cdn.yeniakit.com.tr/images/news/625/alti-ayda-270-milyon-dolarlik-kozmetik-urun-ithalati-yapildi-h1535363509-0a0455.jpg"}
            alt=""
          />
        </div>

        <div className="contentStyle">
          <img
            style={{ width:"100%", height: "500px" }}
            src={"https://www.umityildirim.com/wp-content/uploads/yeni-pc-setup-1024x587.jpg"}
            alt=""
          />
        </div>

        <div className="contentStyle">
          <img
            style={{ width:"100%",  height: "500px" }}
            src={"https://st.myideasoft.com/idea/bx/58/myassets/blogs/el-aletleri-2.jpg?revision=1625491881"}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarouse;
