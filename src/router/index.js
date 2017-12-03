import React from 'react'
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import App from '../components/App';
import Home from '../components/Home';
import Searc from '../components/Common/Search';
import List from '../components/List';
import Content from '../components/Content1';
import Detail from '../components/Details';
import Samek from '../components/Same';
import Theame from '../components/Theame';
import Gocart from '../components/Gocart';
const router=(
	<Router>
	   <App>
	      <Switch>
	          <Route path="/home" component={Home} />
              <Route path="/search" component={Searc} />
              <Route path="/list" component={List} />
              <Route path="/content" component={Content} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/same/:name" component={Samek}/>
              <Route path="/theame" component={Theame} />
              <Route path="/gocart" component={Gocart} />
              <Redirect from="*" to="/home" />
	       </Switch>
	   </App>
	</Router>

	)

export default router;