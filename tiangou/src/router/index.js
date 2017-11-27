import React from "react"
import {Provider} from 'react-redux'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink
} from 'react-router-dom'
import './router.css'
import store from '../Redux/Store'
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import Find from "../components/Find/Find";
import Word from "../components/Word/Word";
import Mine from "../components/Mine/Mine";




const router = (
	<Provider store={store}>
		<Router>
			<div>
				<ul> 
		          <li><NavLink activeClassName="active" to="/shop">Shop</NavLink></li>
		          <li><NavLink activeClassName="active" to="/find">Find</NavLink></li>
		          <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
		          <li><NavLink activeClassName="active" to="/word">Word</NavLink></li>
		          <li><NavLink activeClassName="active" to="/mine">Mine</NavLink></li>
		        </ul>
				<Switch>
				 	{
				 		//switch 只加载匹配路径的第一个孩子
				 	}
					<Route path="/home" component={Home}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/find" component={Find}/>
					<Route path="/word" component={Word}/>
					<Route path="/mine" component={Mine}/>
					
					
					<Redirect from="/" to="/home"/>
				</Switch>
			</div>
		</Router>
	</Provider>
	
)


export default router;
