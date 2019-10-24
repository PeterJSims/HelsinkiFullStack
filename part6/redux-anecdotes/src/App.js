import React from 'react';
import Anecdotes from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';

const App = (props) => {
	return (
		<div>
			<h2>Anecdotes</h2>
			<AnecdoteForm store={props.store} />
			<Anecdotes store={props.store} />
		</div>
	);
};

export default App;
