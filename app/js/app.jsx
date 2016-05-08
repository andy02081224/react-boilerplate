import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld/HelloWorld.jsx';

import '../styles/app.scss';

ReactDOM.render(<HelloWorld name="Andy" />, document.getElementById('app'));