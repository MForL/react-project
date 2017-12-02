import React, { Component } from 'react';
import './DetailGood.css'
import axios from 'axios';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
class DetailGood extends Component {
	constructor(){
		super();
		this.state= {
			list:[]
		}
		this.addCart =this.addCart.bind(this);
	}
	componentWillMount() {
		var that =this;
		axios.get(`/product/listing/init.node?id=${this.props.match.params.goods_id}`).then(res=>{
				    	console.log(res);
				    	that.setState({
				    		list:res.data.data
				    	})
				})
	}
	addCart(){
		var goods_meg={
			goodname:this.refs.title.innerHTML,
			imgUrl:this.refs.img.src,
			price:this.refs.price.innerHTML,
			originalPrice:this.refs.originalPrice.innerHTML
		}
		axios.post('/goods/create',goods_meg).then((res)=>{
			console.log(res);
		})
	}
  	render() {
  		var imgUrl = this.state.list.length ? this.state.list[0].data : [];
  		var cont = this.state.list.length ? this.state.list[2].data : []
  		console.log(cont);
	    return (

	    	<div>
		    	<div className="detail_top">
		    		<NavLink to="/home">
						<i className="iconfont">&#xe614;</i>
		    		</NavLink>
					<h3>商品</h3>
					<p>...</p>
		    	</div>

		    	<div className="big_img">
		    		<img src={imgUrl.imageUrl} alt="" ref="img"/>
		    	</div>
				
				<div className="detail_cont">
					<div>
						<img src={cont.countryImageUrl} alt=""/>
						<span>{cont.provider}</span>
					</div>
					<div ref="title">{cont.title}</div>
					<div>{cont.promotion}</div>
					<div>
						<div>
							<p ref="price">￥{cont.price}</p><span ref="originalPrice">￥{cont.originalPrice}</span>
						</div>
						<div>{cont.soldStr}</div>
					</div>
				</div>



		    	<div className="detailgood_bot">
		    		<div className="detail_img">
		    			<img src="//image1.51tiangou.com/tgou2/img2/product/icon-pinpai.png" alt=""/>	
		    		</div>
		    		<span className="btn_add" onClick={this.addCart}>加入购物车</span>
		    		<span className="btn_buy">立即购买</span>
		    	</div>
	    	</div>
	      
	    );
  	}
}

export default DetailGood;
