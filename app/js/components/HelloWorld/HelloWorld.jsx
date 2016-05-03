import React from 'react';

import './HelloWorld.scss';

class HelloWorld extends React.Component {
	static defaultProps = {
		whatever: '123'
	};

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="hello-world">{this.props.name} Hello World!</div>
		);
	}
}

export default HelloWorld;