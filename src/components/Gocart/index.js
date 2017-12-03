import React, { Component} from 'react';
import './index.scss';
import '@/assets/iconfont/iconfont.css';
import 'antd-mobile/dist/antd-mobile.css'; 
var _ = require('lodash');
import Demo from './demo.js';
import {NavLink} from 'react-router-dom';
import Button from './button.js';
import Pagination from './page.js'
class Gocart extends Component {
   
    constructor() {
        super();
        this.state={
        	val:{},
        }
    }
    
    componentWillMount(){
    	var obj = {}
        for(var i in _.uniqBy(JSON.parse(decodeURI(localStorage.getItem('product'))),'id')){
        	obj[_.uniqBy(JSON.parse(decodeURI(localStorage.getItem('product'))),'id')[i].store_name]  =1
        }
        this.setState({
        	val:obj
        })
    }

    render() {
    	
        return (
    <div id="gocart">
      <nav className="navh">
         <section className="he">
         <ul>
         <NavLink to="/home">  	<li className="f1"></li> </NavLink>
		<li className="f2">购物车</li>
        <li className="f3">
        <i className="iconfont icon-fangzi-copy"></i>
        </li>
    	</ul> 
	</section>
	</nav>
	<nav className="navm">
	<section className="thing">
	<table>
	<thead>
	<tr>
	<th>商品图片</th>
	<th>商品名</th>
	<th>单价</th>
	<th>数量</th>
	<th>总价</th>
	<th>操作</th>
	</tr>
	</thead>
	<tbody>
    {
    	
    	_.uniqBy(JSON.parse(decodeURI(localStorage.getItem('product'))),'id').map((item,index)=>
    		<tr key={item.id}>
    		<td><img src={item.image_60} /></td>
    		<td>{item.store_name}</td>
    		<td>{item.price}元</td>
    		<td><Demo myevent={this.handle.bind(this,item.store_name)}></Demo></td>
    		<td>{this.state.val[item.store_name] * item.price}</td>
    		<td onClick={this.handleDel.bind(this,index)}><Button></Button></td>
    		</tr>
    		)
    }
    

	</tbody>  
	</table>
	</section>
	</nav>
	<nav className="navf">

	</nav>
    </div>
        );
    }

    handleDel(index,e){
    	 console.log(e.target.parentNode.parentNode.parentNode.parentNode.remove()); 
        var list= _.uniqBy(JSON.parse(decodeURI(localStorage.getItem('product'))),'id');
        list.splice(index,1)
        localStorage.setItem('product',encodeURI(JSON.stringify(list)))
              
    
    }
    handle(name,value){
    	var obj = this.state.val    	
    	obj[name] = value;
    	this.setState({
    		val:obj
    	})
    }
}

export default Gocart;

