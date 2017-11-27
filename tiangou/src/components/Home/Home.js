import React, { Component } from 'react';
import './Home.css'
import {connect} from "react-redux";
import axios from 'axios';
import 'antd/dist/antd.css'

import { Carousel } from 'antd';
class Home extends Component {
	componentWillMount() {
		if (this.props.list.length===0) {
			this.props.getData();
		}	
	}
  	render() {
	    return (
	    	<div>
	    		<div className="Home">
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
						    <div><h3>1</h3></div>
						    <div><h3>2</h3></div>
						    <div><h3>3</h3></div>
						    <div><h3>4</h3></div>
						</Carousel>
		        	</div>
		      	</div>
	    	</div>
	      
	    );
  	}
}

export default connect(
	(state)=>{
			return {
				list:state.list
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
	
)(Home);
