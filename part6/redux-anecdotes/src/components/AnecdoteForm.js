import React from 'react';
import { newAnecdote } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';

const AnecdoteForm = ({ store }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		store.dispatch(newAnecdote(e.target.anecdote.value));
		addNotification(e.target.anecdote.value);
		sendNotification(e.target.anecdote.value);
	};

	const sendNotification = (content) => {
		store.dispatch(addNotification(`${content} has been added to the list`));
		setTimeout(() => {
			store.dispatch(addNotification(null));
		}, 5000);
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
