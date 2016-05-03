import React from 'react';

class HelloWorld extends React.Component {
	static defaultProps = {
		whatever: '123'
	};

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