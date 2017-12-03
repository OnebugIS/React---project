import React, { Component} from 'react';
import Search from '../Common/Search';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import Foot from '../Common/Foot';
import './index.scss';
var divstyle={
  color:'#666',
  fontSize:'14px',
  fontWeight:'bold',
  textAlign:'center',
  height:'40px',
  lineHeight:'40px'
}
var ulstyle={
	width:'100%'
}
var listyle={
	borderLeft:'0px'
}
class Samek extends Component {

    constructor() {
        super();
        this.state={
        	datalist:[],
        	k:null,
        }
    }
   
    componentWillMount(){
           console.log(this.props.match.params.name)
    axios.get(`/index.php?act=list&k=${this.props.match.params.name}&ajax=1`).then(res=>{
    	console.log(res.data.data)
    	this.setState({
    		datalist:res.data.data
    	})
    })
  }

    render() {
        return (
        	<div >
        	<Search ></Search>
        	<div className="head">
            <ul style={ulstyle} className="myul">
            <li style={listyle}>全部分类</li>
            <li>商圈</li>
            <li>默认排序</li>
            </ul>
            </div> 
            <div className="detail">
           
            {   
            	this.state.datalist.map(data=>
                <div className="a1" >
      <div className="pic">
      <NavLink to={`/detail/${data.id}`}> <img src={data.image_240} /> </NavLink>
      </div>
      <ul>
      <li> 
      <span>{data.city_name}</span>
      <span>{data.store_name}{data.msg_name}</span>
      </li>
      <li>
     {data.subtitle}
      </li>
      <li>
      <span>￥{data.price}</span>
      <span>/</span>
      <span>{data.origin_price}</span>
      <span><i className="iconfont icon-xiaoren i"></i>{data.buy_num}</span>
      </li>
      </ul>
       </div>
            )	
        }
  </div>
  <div style={divstyle}>没有了....</div>
 
      </div>
        );
    }

   
}

export default Samek;
