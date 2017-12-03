import React, { Component } from 'react';
import './content1.scss';
import axios from 'axios';
import '@/assets/iconfont/iconfont.css';
import {NavLink} from 'react-router-dom';
var dian=1;
class Content1 extends Component {
   
    constructor() {
        super();
        this.state={
        	datalist:[],
        }
    }

    componentWillMount(){
      axios.get('/list.html?curpage=1&ajax=1').then(res=>{
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
    <div className="select">
    <span onClick={this.beforePage.bind(this)}>上一页</span>
    <span onClick={this.nextPage.bind(this)}>下一页</span>
    </div>

  </div>
        );
    }
    
    nextPage(){
      dian++;
      console.log(dian);
      axios.get('/list.html',{
        params:{
          curpage:dian,
          ajax:1
        }
      }).then(res=>{
        this.setState({
          datalist:res.data.data
        })
      })
    }

    beforePage(){
      if(dian<=1){
        return 1;
      }
       dian--;
       console.log(dian)
      axios.get('/list.html',{
        params:{
          curpage:dian,
          ajax:1
        }
      }).then(res=>{
        console.log(res.data.data)
        this.setState({
          datalist:res.data.data
         })
      })
    }
}

export default Content1;
