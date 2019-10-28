import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import filterReducer from './reducers/filterReducer';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
	notification: notificationReducer,
	anecdotes: anecdoteReducer,
	filter: filterReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
