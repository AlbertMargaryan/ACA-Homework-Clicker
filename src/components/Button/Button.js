import React from 'react';
import './Button.css'

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<span className="button-container">
				<button onClick={this.props.onclick} disabled={this.props.disabled} >
					{this.props.title}
				</button>
			</span>
		);
	}
}