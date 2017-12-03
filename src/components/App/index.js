import ReactDom from 'react-dom'
import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
        	<div>
               
               {
                this.props.children
               } 

        	</div>
        );
    }
}

export default App;
