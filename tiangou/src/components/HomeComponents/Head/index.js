import React, { Component } from 'react';
import './Head.css'
import {connect} from "react-redux";
import axios from 'axios';
import 'antd/dist/antd.css'
import {Carousel} from 'antd';
class Head extends Component {
	constructor(){
		super();
		this.state={
			dataList:[]
		}
	}
	componentDidMount() {
		if (this.props.dataList.length===0) {
			this.props.getData();
		}	
	}
  	render() {
  		var lunArray = this.props.dataList.length ? this.props.dataList[4].data.items:[];
		// console.log(lunArray);
		var listF = this.props.dataList.length ? this.props.dataList[5].data.items:[];
		// console.log(listF);
		var adverImg = this.props.dataList.length ? this.props.dataList[6].data.items[0]:[];
	    return (
	    	<div>
	    		<div className="Head">
	        		<div className="search">
						<span>
							||||||
							VIP
						</span>
						<i className="iconfont searchIcone">&#xe63d;</i>
						<input type="text" placeholder="好物搜索" />
						<i className="iconfont shopIcone">&#xe505;</i>
						<i className="iconfont messageIcone">&#xe637;</i>
		        	</div>
		        	<div className="lunbo">
						<Carousel autoplay>
					    	{
					    		lunArray.map((item, index)=>{
					    			return (
									<div key={item.id}>
					    				<img src={item.imageUrl} alt="" />
									</div>
				    				)
					    		})
					    	}
						 </Carousel>
		        	</div>
		        	<div className="somelist">
						<ul className="fourList">
							
								{
									listF.map((item, index)=>{
										return (
											<li key={item.id}>
												<img src={item.imageUrl} alt=""/>
												<p>{item.title}</p>
											</li>
											
										)
									})
								}
						
						</ul>
		        	</div>
		        	<div className="adver">
						<img src={adverImg.imageUrl} alt=""/>
		        	</div>
		      	</div>
	    	</div>
	      
	    );
  	}
}

export default connect(
	(state)=>{
			return {
				dataList:state.list
			}
	},
	{
		getData:()=>{
			//异步action 借助 redux-promise 中间件实现 
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1511766446555
			return axios.get("/shopping/index/init.node?storeId=179&cityId=2554&_=1511766446555").then(res=>{
				    	return {
				    		type:"ALL",
				    		payload:res.data.data
				    	}
				})
		}
	}
	
)(Head);
