import 'antd-mobile/dist/antd-mobile.css'; 
import React, { Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

const ButtonExample = () => (
  <WingBlank>
  
     <Button type="primary" inline size="small">移除购物车</Button><WhiteSpace />
  </WingBlank>
);
export default ButtonExample;