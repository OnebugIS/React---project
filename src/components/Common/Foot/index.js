import React, { Component} from 'react';
import './foot.scss';
import {NavLink} from 'react-router-dom';
 var obj={
    	borderRight:'0px',
    	paddingRight:'0px'
    }

class Foots extends Component {
   
    constructor() {
        super();
    }
   
    render() {
        return (
        	<section id="footer">
  	 <div id="foo">
  <div>
  <p>登录</p>
  <p>注册</p>
  </div>  
  </div>

  <ul id="f">
  <li>首页</li>
  <li>电脑版</li>
  <li>客户端</li>
  <li>关于我们</li>
  <li>信息反馈</li>
  <li style={obj}>帮助</li>
  </ul>
</section>
        );
    }
}

export default Foots;
