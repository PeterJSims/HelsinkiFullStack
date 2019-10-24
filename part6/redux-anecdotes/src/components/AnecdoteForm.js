import React from 'react';
import { newAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = ({ store }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		store.dispatch(newAnecdote(e.target.anecdote.value));
	};
	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" name="anecdote" />
				</div>
				<button type="submit">create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
