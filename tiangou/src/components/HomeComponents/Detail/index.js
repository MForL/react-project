import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import axios from 'axios';
import './Detail.css'
import {
	NavLink
} from 'react-router-dom'
class Detail extends Component {
	constructor() {
		super();
		this.state = {
			detail_cont: []
		}
	}
	componentDidMount() {
		if (this.props.details.length === 0) {
			this.props.getDetail();
			this.props.getDetailTwo();
			this.props.getDetailThree();
			this.props.getDetailfour();

		}

	}
	render() {
		return (
			<div className="Detail">
				<div className="detail_cont">
					<p>猜你喜欢</p>
				</div>
				<div className="detail_list">
					
						{
							this.props.details.map((item, index)=>{
								return(
									
										<div className="detail_listcont" key={item.data.id}>
											<NavLink to={`/detailGood/${item.data.id}`}>
												<div className="border_box">
													<img src={item.data.imageUrl} alt=""/>
													<div className="pcont">
														{item.data.title}
													</div>
													<span>￥{item.data.price}</span>
												</div>
											</NavLink>
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
	(state) => {
		// console.log(state.details)
		return {
			details: state.details
		}
	}, {
		getDetail: () => {
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170609&tabIndex=0&childIndex=0&currentView=3&source=1&startId=10215633
			return axios.get("/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1").then(res => {
				var data = res.data.data;
				// console.log(data);
				data.splice(0, 1);
				data.splice(5, 1);
				// console.log(res.data.data.splice(0,1));
				return {
					type: "detailsGet",
					payload: data
				}
			})
		},
		getDetailTwo: () => {
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170609&tabIndex=0&childIndex=0&currentView=3&source=1&startId=10215633
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170610&tabIndex=0&childIndex=0&currentView=4&source=1&startId=9127761
			return axios.get("/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170609&tabIndex=0&childIndex=0&currentView=3&source=1&startId=10215633").then(res => {
				var data = res.data.data;
				data.splice(5, 1);
				return {
					type: "detailsGet",
					payload: data
				}
			})
		},
		getDetailThree: () => {
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170609&tabIndex=0&childIndex=0&currentView=3&source=1&startId=10215633
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170610&tabIndex=0&childIndex=0&currentView=4&source=1&startId=9127761
			return axios.get("/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170610&tabIndex=0&childIndex=0&currentView=4&source=1&startId=9127761").then(res => {
				var data = res.data.data;
				data.splice(5, 1);
				return {
					type: "detailsGet",
					payload: data
				}
			})
		},
		getDetailfour: () => {
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512126080600&tabIndex=0&childIndex=0&currentView=2&source=1
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170609&tabIndex=0&childIndex=0&currentView=3&source=1&startId=10215633
			// https://midway.51tiangou.com/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170610&tabIndex=0&childIndex=0&currentView=4&source=1&startId=9127761
			return axios.get("/shopping/index/init.node?storeId=179&cityId=2554&_=1512183170612&tabIndex=0&childIndex=0&currentView=6&source=1&startId=10620557").then(res => {
				var data = res.data.data;
				data.splice(5, 1);
				return {
					type: "detailsGet",
					payload: data
				}
			})
		}
	}
)(Detail);