import React from 'react';

import './HelloWorld.scss';

import imgSrc from '../../../img/test.jpg';

class HelloWorld extends React.Component {
	static defaultProps = {
		name: 'ABC'
	};

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="hello-world">
				<h1>Hello, {this.props.name}</h1>
				<img src={imgSrc} alt=""/>
			</div>
		);
	}
}

export default HelloWorld;