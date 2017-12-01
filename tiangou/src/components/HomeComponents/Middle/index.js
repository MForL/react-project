import React, { Component } from 'react';
import './Middle.css'
import {connect} from "react-redux";
import axios from 'axios';
import 'antd/dist/antd.css'
import {Carousel} from 'antd';
import { BackTop } from 'antd';
class Middle extends Component {
	constructor(){
		super();
		this.state={
			dataList:[]
		}
	}
	componentDidMount() {

	}
	render() {
		console.log(this.props.dataList)
		var lunShun = this.props.dataList.length ? this.props.dataList[7].data.items:[];
		var qianggou = this.props.dataList.length ? this.props.dataList[8].data:[];
		var qianggouList = this.props.dataList.length ? this.props.dataList[8].data.items:[];
		var fourBox= this.props.dataList.length ? this.props.dataList[9].data.items:[];
		var Middle_one= this.props.dataList.length ? this.props.dataList[10].data.imageUrl:[];
		var Middle_two= this.props.dataList.length ? this.props.dataList[11].data.imageUrl:[];
		// var Middle_three= this.props.dataList.length ? this.props.dataList[13].data.data[0].imageUrl:[];
		var same_one= this.props.dataList.length ? this.props.dataList[10].data.items:[];
		var same_two= this.props.dataList.length ? this.props.dataList[11].data.items:[];
		// var same_three= this.props.dataList.length ? this.props.dataList[13].data.data:[];
		
		// console.log(same_three)
		return (
			<div>
				<div className="backTop">
					<BackTop />
				</div>
				<div className="middle_first">
					<div className="article">
						<div className="leftimg">
							<img src="https://img1.tg-img.com/seller/201711/27/0D785E87-B71D-4B59-A13B-FDD56EDD89D3.png!y" alt=""/>
						</div>
						<div className="rightcont">
							<Carousel autoplay dots="false">
								{
									lunShun.map((item, index)=>{
										return (
											<div key={item.id}>
												<p>{item.subTitle}</p>
											</div>
										)
									})
								}
							  </Carousel>
						</div>
					</div>
					<div className="middle_second">
						<div className="qianggou">
							<img src={qianggou.imageUrl} alt=""/>							
						</div>
						<div className="budong">
							<Carousel autoplay dots="false">
								{
									qianggouList.map((item, index)=>{
										return (
											<div key={item.bk}>
												<img src={item.imageUrl} alt=""/>
												<div className="right_cont">
													<p>{item.title}</p>
													<span>￥{item.price}</span>
													<span className="special">￥{item.originalPrice}</span>
												</div>
												
											</div>
										)
									})
								}
							</Carousel>
						</div>
					</div>
					
				</div>
				<div className="middle_third">
						<ul>
						{
							fourBox.map((item, index)=>{
								return (
									<li key={item.id}  data-type={index}>
										<img src={item.imageUrl} alt=""/>
									</li>
									
								)
							})
						}
						</ul>
				</div>
				<img src={Middle_one} alt="" className="middle_img"/>
				<div className="normal">
					{
						same_one.map((item, index)=>{
							return (
								<div key={item.id} data-type={index}>
									<img src={item.imageUrl} alt=""/>
								</div>
							)
						})
					}
				</div>
				<img src={Middle_two} alt="" className="middle_img"/>
				<div className="normal">
					{
						same_two.map((item, index)=>{
							return (
								<div key={item.id} data-type={index}>
									<img src={item.imageUrl} alt=""/>
								</div>
							)
						})
					}
				</div>
				
				<div className="bot"></div>
			</div>
		  
		);
	}
	// 
			// 									
	
}

export default connect(
	(state)=>{
			return {
				dataList:state.list
			}
	},
	null
)(Middle);


