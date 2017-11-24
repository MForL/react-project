<<<<<<< HEAD
import React, {Component} from 'react';

import {connect} from 'react-redux';
const AppUI = (props)=>{
	return (
		<div className="all">
			<input type="text" id="ipt" />
			<input type="button" value="addTodo" onClick={props.addTODO}/>
			<ul>
				{
					props.list.map((item, index)=>{
						return <li key={index}>{item}</li>
					})
				}
			</ul>
		</div>
	)
}

const mapStatetoProps = (state)=>{
	return {
		list:state.list
	}
}


const mapDispatchtoProps = (dispatch)=>{
	return {
		addTODO:function () {
			dispatch({
				type:"ADD_TODO",
				payload:document.querySelector("#ipt").value
			})
		}
	}



const App = connect(mapStatetoProps, mapDispatchtoProps)(AppUI);

export default App;