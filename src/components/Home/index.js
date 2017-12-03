import React, { Component } from 'react';
import '@/assets/iconfont/iconfont.css';
import './index.scss'
import ReactSwipe from 'react-swipe';
import axios from 'axios';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import Conten from '../Content/index.js';
import Foot from '../Common/Foot/index.js';
import {NavLink} from 'react-router-dom';
class Home extends Component {
    
    constructor() {
        super();
        this.state={
          looplist:[]
        }
    }

    componentWillMount(){
        axios.get('/index.php?act=index&op=index&ajax=1').then(res=>{
            this.setState({
                looplist:res.data.category
            })
               
        })
    }

    render() {
        return (
        	<div id="home">
    <section  className="header">
          <ul>
             <li  className="f1">桐乡</li>
             <li  className="f2">一传十传百</li>
             <li  className="f3">
          <i  className="iconfont icon-xiaoren"></i>我的
            </li>
          </ul> 
    </section>
    <article>
             <section className="text">
          <div> 
             <i className="iconfont icon-search"></i>
             <NavLink to="/search" className="search"> <span>输入商家名字/商品名称获取优惠</span> </NavLink>
          </div>
          </section>
          <section className="banner">
              <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000,}}>
                <div><img src={img1} /></div>
                <div><img src={img2} /></div>
                <div><img src={img3} /></div>
            </ReactSwipe>
          </section>
          <section className="smpic">
             <ul key={this.state.looplist.length}>
               { 
                  this.state.looplist.map((item,index)=>
                    index%2!=0?
                   <li key={item.id}>
                   <div><img src={item.icon_url} /></div>
                   <p>{item.name}</p>
                   </li>
                   :null
                    )
               }
             </ul>
          </section>
          <section className="content">
             <div className="tuijian">本周推荐</div>
             <Conten></Conten>
          </section>
          <section className="footer">
         <div>
          <p>
          <NavLink to="/list" activeClassName="active" className="youhui">   查看全部优惠 </NavLink>
          </p>
          <p>返回顶部</p> 
       </div>
       <Foot></Foot>
  </section>
  </article>

        	</div>
        );
    }
}

export default Home;
