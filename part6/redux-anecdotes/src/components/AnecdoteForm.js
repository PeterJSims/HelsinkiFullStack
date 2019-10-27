import React from 'react';
import { newAnecdote } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.newAnecdote(e.target.anecdote.value);
		addNotification(e.target.anecdote.value);
		sendNotification(e.target.anecdote.value);
	};

	const sendNotification = (content) => {
		props.addNotification(`${content} has been added to the list`);
		setTimeout(() => {
			props.addNotification(null);
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

const mapDispatchToProps = {
	newAnecdote,
	addNotification
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
