import React from 'react';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>{this.props.name} Hello World!</div>
		);
	}
}

export default HelloWorld;