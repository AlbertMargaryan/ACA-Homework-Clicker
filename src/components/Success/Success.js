import React from 'react';
import './Success.css'

export default class Success extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="success" style={{display: this.props.display}}>
				<p>{this.props.message}</p>
			</div>
		);
	}
}