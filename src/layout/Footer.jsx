import React from 'react'

import {
  InstagramOutlined,FacebookOutlined,WhatsAppOutlined
} from "@ant-design/icons";
import { Button } from 'antd';

function Footer() {
  return (
    <div className='Footer'  >
 
    <Button style={{marginRight:"10px"}} shape="circle" icon={<InstagramOutlined />} />
    <Button style={{marginRight:"10px"}} shape="circle" icon={<WhatsAppOutlined />} />
    <Button style={{marginRight:"10px"}} shape="circle" icon={<FacebookOutlined />} />
    </div>
  )
}

export default Footer