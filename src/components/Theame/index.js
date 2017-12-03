import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './index.scss';
class Theame extends Component {
  
    constructor() {
        super();
        this.state={
        	datalist:[]
        }
    }

    componentWillMount(){
    	console.log(this.props.match.name)
    axios.get('/index.php?act=list&k=佰年尚庭酒店&ajax=1').then(res=>{
    	console.log(res.data.data)
    	this.setState({
    		datalist:res.data.data
    	})
    })
  }

    render() {
        return (
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
        );
    }
}

export default Theame;
