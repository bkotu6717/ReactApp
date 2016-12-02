import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AppRoute from './AppRoute.jsx'

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<AppRoute />, document.getElementById('routes'));

// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);