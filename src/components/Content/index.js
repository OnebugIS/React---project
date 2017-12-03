import React, { Component } from 'react';
import './index.scss';
import '@/assets/iconfont/iconfont.css';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class Content extends Component {
   
    constructor(props) {
        super(props);

        this.state={
        	datalist:[],
          linkid:null,
        }
    }
    
    componentWillMount(){
    	axios.get('/index.php?act=index&op=index&ajax=1').then(res=>{
      
    		this.setState({
    			datalist:res.data.data
    		})
    	})
    }

    render() {
        return (
        	 <div className="detail" key={this.state.datalist.length}>
       {   
    	this.state.datalist.map(data=>
       <div className="a1" onClick={this.handleClick.bind(this,data.id)}>
           <div className="pic">
           <NavLink to={`/detail/${data.id}`}>  <img src={data.image_240} /> </NavLink>
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

    handleClick(id){
        console.log(id);
        this.setState({
          linkid:id
        })
        // console.log(this.props)
        // this.props.history.push(`/list`);
       
    }
}

export default Content;
