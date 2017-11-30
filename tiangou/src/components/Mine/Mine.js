import React, { Component } from 'react';
import axios from 'axios';
import {connect} from "react-redux";
class Mine extends Component {
	constructor(){
		super();
		this.login = this.login.bind(this);
		this.regist = this.regist.bind(this);
	}
	login(){
		axios.post('/users/login',{
			username:this.refs.username.value,
			psw:this.refs.psw.value
		}).then((res)=>{
			console.log(res);
		})
	}
	regist(){
		// http://localhost:8080/users/regist
		axios.post('/users/regist',{
			username:this.refs.username.value,
			psw:this.refs.psw.value
		}).then((res)=>{
			console.log(res);
		})
	}
  render() {
    return (
      <div className="Mine">
        用户名：<input type="text" ref="username"/><br />
        密码：<input type="text"ref="psw" /><br />
        <button onClick={this.login}>登陆</button>
        <button onClick={this.regist}>注册</button>
      </div>
    );
  }
}

export default connect(
	(state)=>{
		console.log(state);
		return {
			list :state.list
		}
	},
	null
)(Mine);

