import React, { Component } from 'react';

import {connect} from "react-redux";
class Mine extends Component {
  render() {
    return (
      <div className="Mine">
        <h3>Mine</h3>
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

