import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Detail.css'
class Detail extends Component {
	constructor(){
		super();
		this.state={
			needDetail:[]
		}
	}
	componentDidMount() {
		this.props.getDetail();
	}
	render () {
		var detail_cont = this.props.details.length ? this.props.details[0].data : [];
		var data = this.props.details.length ? this.props.details : [];
		data.splice(0,1);
		data.splice(5,1);
		console.log(data);
		return (
			<div className="Detail">
				<div className="detail_cont">
					<p>{detail_cont.title}</p>
				</div>
				<div className="detail_list">
					{
						data.map((item, index)=>{
							return(
								<div className="detail_listcont" key={item.data.id}>
									<img src={item.data.imageUrl} alt=""/>
									<div className="pcont">
										{item.data.title}
									</div>
								</div>
							)
						})
					}
				</div>



				<div className="bot"></div>
			</div>
		)
	}
}

export default connect(
	(state)=>{
		return{
			details:state.details
		}
	},
	{
		getDetail:()=>{
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1
			return axios.get("/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1").then(res=>{
				    	return {
				    		type:"detailsGet",
				    		payload:res.data.data
				    	}
				})
		}
	}
)(Detail);