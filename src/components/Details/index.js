import React, { Component} from 'react';
import './detail.scss';
import '@/assets/iconfont/iconfont.css';
import axios from 'axios';
import iconpath from '../Home/img/icon-path.png';
import icontel from '../Home/img/icon-tel.png';
import Foot from '../Common/Foot';
import {NavLink} from 'react-router-dom';
var ulstyle={
	marginTop:'-10px'
}
var listyle={
	width:'12px',
	marginRright:'6px'
}
var spanstyle={
	fontSize:'17px'
}
var pstyle={
	textAlign:'center',
	lineHeight:'62px'
}
var imgstyle={
	width:'22px'
}
var istyle={
	fontSize:'10px',
	color:'#F64744'
}
var li={
	borderLeft:'0'
}
var p={
	textAlign:'center',
	margin:'10px 0'
}

class Details extends Component {

    constructor() {
        super();
        this.state={
        	datalist:'',
        	url:'',
        	data:'',
        	youhui_info:'',
        	store:'',
        	table_list:[],
        	buyinfo_list:[],
        	youhui_other:[],
        
        	
        }
    }
    componentWillMount(){
    	
      axios.get(`/index.php?act=deal&op=index&id=${this.props.match.params.id}&ajax=1`).then(res=>{
      
      	console.log(res.data)
      	this.setState({
      		datalist:res.data,
      		url:res.data.youhui_info.image_1280,
      		data:res.data.table_list[0],
      		youhui_info:res.data.youhui_info,
      		store:res.data.store,
      		table_list:res.data.table_list,
      		buyinfo_list:res.data.buyinfo_list,
      		youhui_other:res.data.youhui_other
      		
      	})
      })
    }
    render() {
    	
        return (
            <div>
{
    //头部
}  
	<section className="he">
   <ul>
   <NavLink to="/home">	<li className="f1"></li> </NavLink>
		<li className="f2">优惠详情</li>
     <li className="f3">
     <i className="iconfont icon-fangzi-copy"></i>
     </li>
	</ul> 
	</section>
 {
 	//主体
 }
	<section className="content">
	{
		// 一
	}
		<div className="img">
			<div className="wrapper" >
				<img src={this.state.url} />
			</div>
		</div>
	{
		// 二
	}	
	    <div className="price" >
		    <div key={this.state.data}>
			<span>￥</span>
			<span>{this.state.data.price}</span>
			<span>/</span>
			<span>{this.state.data.origin_price}</span>
			</div>
			<div onClick={this.handleClick.bind(this)}>
				加入购物车
			</div>
		</div>	
		
	{
		// 三
	}	
	    <div className="name" key={this.state.youhui_info}>
			<h3>{this.state.youhui_info.store_name}{this.state.youhui_info.msg_name}</h3>
			<p>{this.state.youhui_info.title}</p>
		</div>
		<div className="buy">
			<span><i className="iconfont icon-xiaoren"></i></span>
			<span>{this.state.youhui_info.buy_num}人已购买</span>
		</div>
		<div className="start">
			<i className="iconfont icon-jinlingyingcaiwangtubiao29"></i>
			<i className="iconfont icon-jinlingyingcaiwangtubiao29"></i>
			<i className="iconfont icon-jinlingyingcaiwangtubiao29"></i>
			<i className="iconfont icon-jinlingyingcaiwangtubiao29"></i>
			<i className="iconfont icon-jinlingyingcaiwangtubiao29"></i>
			<span>暂无评论</span>
		</div>


	{
		// 四
	}
    <div className="address">
			<div>
				<ul style={ulstyle} key={this.state.store}>
					<li> <img src={iconpath} style={listyle}/><span style={spanstyle}>{this.state.store.name}</span></li>
					<li>{this.state.store.address}</li>
				</ul>
				<p style={pstyle}><img src={icontel} style={imgstyle}/></p>
			</div>
		</div>
    {
    	//五
    }
    <div className="rich">
	 
		 {  
		 this.state.table_list.map(data=>
		 	<section>
		    <div>
			<p>{data.name}</p>
			<p>
			<span>￥{data.price}</span>
			<del>￥{data.origin_price}</del>
			</p>
			</div>
			{
				///
			}
			<div>
			 {
			   data.data.map(item=>
			   <ul>
				<p style={p}>	<span>{item.title}</span> </p>
				{
				   item.list.map(data=>
				   <section >
					<li style={li}>{data.name}</li>
					<li>{data.amount}</li>
					<li>{data.price}元</li>
			    	</section>
				   )	
				 }				
				</ul>
			   )
			}
			</div> 
             <div>
             {
			    data.info.map(data=>
			    <ul>
					<li>{data}</li>	
				</ul>
			    )
			  }  
			</div>
			</section>
		 )
		 }
		 
		 {
		 	///
		 }
			<div>
				<span>查看图片详情 <span>></span></span>
			</div>
			<div>
				<span>消费提示</span>
			</div>
			<div key={this.state.buyinfo_list.length}>
			     {
			      this.state.buyinfo_list.map(data=>
			      <dl>
					<dt>{data.title}</dt>
					{
					data.info.map(data=>
					<dd>-{data}</dd>
					)
				}
				</dl>
			      )
			     }
			</div>
			<div>
			 <p><NavLink to="/gocart"> 进入购物车 </NavLink></p>
			</div>
			{  
			  this.state.youhui_other.length?
			  <div>
			   <p>本商家其他优惠</p> 
			   {
			   this.state.youhui_other.map(data=>
			   <ul>
					<li>
					<span>{data.subtitle}</span>
					<span><i style={istyle}>￥</i>{data.price}</span>
					</li>
				</ul>
			   )
			}
			 </div>
			 :null
			}
	
		</div>
		<Foot></Foot>
	</section>
   
 </div>
        );
    }

    handleClick(){

    	var product=JSON.parse(decodeURI(localStorage.getItem('product')))||[];
      
    	product.push(this.state.datalist.youhui_info)
   
      localStorage.setItem('product',encodeURI(JSON.stringify(product)))
            

    }

}

export default Details;
