import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import Router from './routers/index';
import SetupAmpifly from '../secrets/amplifyConfig';
var RCTLog = require('RCTLog');
class App extends Component {
	componentDidMount() {
		SetupAmpifly();
	}

	render() {
		return (
			<Provider store={createStore(reducers, applyMiddleware(thunk))}>
				<Router />
			</Provider>
		);
	}
}
export default App;
