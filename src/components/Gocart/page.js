import 'antd-mobile/dist/antd-mobile.css'; 
import React, { Component} from 'react';
import { Pagination, Icon } from 'antd-mobile';
import './index.scss';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};


const App = () => (
  <div className="pagination-container" >
    <Pagination total={5}
      className="custom-pagination-with-icon"
      current={1}
      locale={{
        prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
        nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
      }}
    />
  </div>
);


export default App;