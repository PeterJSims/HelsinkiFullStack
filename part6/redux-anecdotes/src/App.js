import React from 'react';
import Anecdotes from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';

const App = ({ store }) => {
	return (
		<div>
			<h2>Anecdotes</h2>
			{store.getState().notification === null ? <div /> : <Notification store={store} />}
			<AnecdoteForm store={store} />
			<Anecdotes store={store} />
		</div>
	);
};

export default App;
