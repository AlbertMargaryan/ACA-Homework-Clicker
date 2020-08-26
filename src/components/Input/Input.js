import React from 'react';
import './Input.css'

export default class Input extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<label>
				{this.props.labelText}
				<input type={this.props.type} value={this.props.val} onChange={this.props.onchange}/>
				
			</label>
		);
	}
}