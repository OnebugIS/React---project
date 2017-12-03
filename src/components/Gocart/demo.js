import { List, Stepper } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import React, { Component} from 'react';
import './index.scss';
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
      
    };
  }
 
  
  render() {
    return (
    	<div id="listdemo">
      <List>
        <List.Item 
          wrap
          extra={
            <Stepper
              style={{ width: '20%', width: '85px' }}
              showNumber
              max={20}
              min={1}
              value={this.state.val}
              onChange={this.onChange.bind(this)}
            />}
        >
        </List.Item>
     
      </List>
      </div>
    );
  }
   onChange(val) {
   
    this.setState({
    	val:val
    })
    this.props.myevent(val)
  }
 
}
export default Demo;