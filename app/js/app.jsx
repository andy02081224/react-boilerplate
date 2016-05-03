import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld/HelloWorld.jsx';

let test = (...args) => {
	console.log(args);
};

ReactDOM.render(<HelloWorld name="Andy" />, document.getElementById('app'));