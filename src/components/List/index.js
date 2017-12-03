import React, { Component} from 'react';
import Search from '../Common/Search';
import './list.scss';
import Conten from '../Content1';
import Foot from '../Common/Foot';

var ulstyle={
	width:'100%'
}
var listyle={
	borderLeft:'0px'
}
class List extends Component {

    constructor() {
        super();
    }

    render() {
        return (
          <div className="list">
          <Search></Search>
  <div className="head">
  <ul style={ulstyle} className="myul">
  <li style={listyle}>全部分类</li>
  <li>商圈</li>
  <li>默认排序</li>
  </ul>
  </div>  
  <div className="top">    
  <Conten></Conten>
  </div>
  <Foot></Foot>
	</div>
        );
    }
}

export default List;
