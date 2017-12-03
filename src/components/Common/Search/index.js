import React, { Component } from 'react';
import './search.scss'
import '@/assets/iconfont/iconfont.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Search extends Component {
  
    constructor() {
        super();
        this.state={
          ci:'',
          datalist:[],
        }
    }


    render() {
        return (
        	<div id="search">
	 <section className="header">
    <NavLink to="/home"><span > </span> </NavLink>
	 </section>
	 <section className="text" >
   <form method="get" >
  	    <input type="text" placeholder="请输入您想要查找的优惠"  ref="k" onChange={this.handleChange.bind(this)}/>
      <NavLink to={`/same/${encodeURI(this.state.ci)}`}>
        <span className="icon" > 
         <i className="iconfont icon-chazhao right"></i> 
         </span>
      </NavLink>  
    </form>     
	</section>
  <section id="result">
  {
    this.state.datalist? 
    this.state.datalist.map(data=>
     <ul>
     <li>
     
     <NavLink to={`/same/${data.store_name}`} onClick={this.handleClick.bind(this)}>
     <span className="item_search">{data.store_name}</span>
     <span className="result_count">优惠</span></NavLink>
     </li>
     </ul>
      )
     :null
  }
   
  </section>
  </div>
        );
    }

    handleChange(ev){
      // console.log(ev.target.value)
      axios.get(`/index.php?act=list&k=${encodeURI(ev.target.value)}&ajax=1`).then(res=>{
      console.log(res.data)
      this.setState({
        datalist:res.data.data
      })
      
    })
       this.setState({
        ci:ev.target.value
       })   
    }
   handleClick(){
    window.location.reload()
   }
    
}

export default Search;
