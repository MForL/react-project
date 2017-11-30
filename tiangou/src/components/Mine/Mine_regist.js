import React, { Component } from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import './Mine.css'
import 'antd/dist/antd.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {NavLink} from 'react-router-dom'
const FormItem = Form.Item;
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
		<div className="mine_first">
			<NavLink to='/home'>
				<i className="iconfont">&#xe614;</i>
			</NavLink>
			<h3>免费注册</h3>
			<p>...</p>
		</div>
		<div className="login">
			<dl>
				<dt>用户名</dt>
				<dd>
					<input type="text" id="username" autoFocus v-model="username" />
				</dd>
			</dl>
			<dl>
				<dt>密码</dt>
				<dd>
					<input type="text" id="psw" v-model="psw" />
				</dd>
			</dl>
			<div className="but_only">
				<button type="submit" onClick={this.login} className="login_but">注册</button>	
			</div>
				
		</div>
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

