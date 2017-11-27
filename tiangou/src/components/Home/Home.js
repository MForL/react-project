import React, { Component } from 'react';
import './Home.css'
import {connect} from "react-redux";
import axios from 'axios';
class Home extends Component {
	componentWillMount() {
		if (this.props.list.length==0) {
			this.props.getData();
		}
		
		
	}
  render() {
    return (
      <div className="Home">
        	
      </div>
    );
  }
}

export default connect(
	(state)=>{

			// console.log(state);
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
