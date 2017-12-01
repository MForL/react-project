import React, { Component } from 'react';
import './Home.css'


import Head from '../HomeComponents/Head'
import Middle from '../HomeComponents/Middle'
import Detail from '../HomeComponents/Detail'

class Home extends Component {
	
  	render() {
	    return (
	    	<div>
	    		<Head />
	    		<Middle />
	    		<Detail />
	    	</div>
	      
	    );
  	}
}

export default Home;
