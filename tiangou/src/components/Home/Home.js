import React, { Component } from 'react';
import './Home.css'


import Head from '../HomeComponents/Head'
import Middle from '../HomeComponents/Middle'

class Home extends Component {
	
  	render() {
	    return (
	    	<div>
	    		<Head />
	    		<Middle />
	    	</div>
	      
	    );
  	}
}

export default Home;
