import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducer';

const store = createStore(reducer);

const renderApp = () => {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
