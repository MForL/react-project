import React, { Component } from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import './Mine.css'
import 'antd/dist/antd.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {NavLink} from 'react-router-dom'
const FormItem = Form.Item;
class MineReg extends Component {
	constructor(){
		super();
		
		
	}
	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
			axios.post('/users/regist',values).then((res)=>{
				console.log(res);
			})
      }
    });
  }
  render() {
  	const { getFieldDecorator } = this.props.form;
    return (
      <div className="Mine">
		<div className="mine_first">
			<NavLink to='/home'>
				<i className="iconfont">&#xe614;</i>
			</NavLink>
			<h3>免费注册</h3>
			<p>...</p>
		</div>
		<Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('psw', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Regist
          </Button>
          
        </FormItem>
      </Form>
      </div>
    );
  }
}
const RegistForm = Form.create()(MineReg);



export default connect(
	(state)=>{
		console.log(state);
		return {
			list :state.list
		}
	},
	null
)(RegistForm);

