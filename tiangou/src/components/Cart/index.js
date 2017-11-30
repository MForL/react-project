import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Cart.css'
// import { Radio } from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
class Cart extends Component {			
	componentWillMount() {
		// document.querySelector('.footer').style.display = 'none';		
	}
	componentDidMount() {
		this.props.getShopcart();
	}
	componentWillUnmount() {
		// document.querySelector('.footer').style.display = 'block';
	}
	render () {
		return (
			<div className="Cart">
				<div className="cart_first">
					<i className="iconfont">&#xe614;</i>
					<h3>购物车</h3>
					<p>...</p>
				</div>
				<div className="cart_goods">
					<div className="cart_goodsdetail">
						
					</div>
				</div>
				
			</div>
		)
	}
}


export default connect(
	(state)=>{
		return {
			goods:state.goods
		}

	},
	{
		getShopcart:()=>{
			//异步action 借助 redux-promise 中间件实现 
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1511766446555
			return axios.get("/goods/shop").then(res=>{
				console.log(res);
				    	return {
				    		type:"shopcart",
				    		payload:res
				    	}
				})
		}
	}
)(Cart);