import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Button } from 'antd';

import './Cart.css'
// import { Radio } from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
class Cart extends Component {		
	constructor(){
		super();
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
		this.state={
			num:1
		}
	}	
	componentWillMount() {
		// document.querySelector('.footer').style.display = 'none';		
	}
	componentDidMount() {
		this.props.getShopcart();
	}
	componentWillUnmount() {
		// document.querySelector('.footer').style.display = 'block';
	}
	down(val){
		// console.log("ok");
		if (val==1) {
			document.querySelector('.low_but').disabled=true;
		}else{
			document.querySelector('.low_but').disabled=false;
			var newVal = val-1;
			// console.log(newVal);
			this.setState({
				num:newVal
			})
		}
		
	}
	up(val){
		// console.log("ok");
		var newVal = parseFloat(val) + 1;
		// console.log(newVal);
		this.setState({
			num:newVal
		})
	}
	render () {
		const ButtonGroup = Button.Group;
		return (
			<div className="Cart">
				<div className="cart_first">
					<i className="iconfont">&#xe614;</i>
					<h3>购物车</h3>
					<p>...</p>
				</div>
				<div className="cart_goods">
					<div className="cart_goodsdetail">
						<div className="cart_input">
		                	<input type="checkbox" />
		              	</div>
						<div className="cart_content">
							<img src="" alt=""/>
							<div className="cart_content_cnt">
								<div className="pcont">
						
								</div>
								<div className="price">
									<div className="price_under">
										<span className="price_under_normal">￥255</span>
										<span className="price_under_line">￥888</span>
									</div>
									<div className="price_num">
										<ButtonGroup>
									      <Button className="low_but" onClick={()=>this.down(this.refs.numC.value)}>-</Button>
									      <input type="number" value={this.state.num} ref="numC" id="numC" readOnly className="middle_num"/>
									      <Button className="high_but" onClick={()=>this.up(this.refs.numC.value)}>+</Button>
									    </ButtonGroup>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="cart_all">
						<div className="price_all">
							合计：<span>￥197.00</span>(不含运费)
						</div>
						<div className="price_sub">
							<div className="price_nei">
								结算<span>({this.state.num})</span>
							</div>
							
						</div>
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