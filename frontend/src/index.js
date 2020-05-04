import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import Root from './components/root';
import configureStore from './store/store';


import * as serviceWorker from './serviceWorker';


document.addEventListener('DOMContentLoaded', () => {
	let store;

	// store = configureStore({});
 	const root = document.getElementById('root');

  ReactDOM.render(<Root  />, root);//store={store}
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
