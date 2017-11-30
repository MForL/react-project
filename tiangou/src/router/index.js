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
import Cart from "../components/Cart";




const router = (
	<Provider store={store}>
		<Router>
			<div>
				<ul className="footer"> 
		          <li><NavLink activeClassName="active" to="/shop">
						<i className="iconfont">&#xe61a;</i>
						<p>逛商场</p>
		          </NavLink></li>
		          <li><NavLink activeClassName="active" to="/find">
						<i className="iconfont">&#xe502;</i>
						<p>发现</p>
		          </NavLink></li>
		          <li><NavLink activeClassName="active" to="/home">
						<i className="iconfont">&#xe608;</i>
						<p>购物</p>
		          </NavLink></li>
		          <li><NavLink activeClassName="active" to="/word">
						<i className="iconfont">&#xe616;</i>
						<p>全球购</p>
		          </NavLink></li>
		          <li><NavLink activeClassName="active" to="/mine">
						<i className="iconfont">&#xe621;</i>
						<p>我的</p>
		          </NavLink></li>
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
					<Route path="/cart" component={Cart}/>
					
					
					<Redirect from="/" to="/home"/>
				</Switch>
			</div>
		</Router>
	</Provider>
	
)


export default router;
