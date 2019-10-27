import React from 'react';
import anecdoteService from '../services/anecdotes';
import { newAnecdote } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		e.target.anecdote.value = '';
		const addedAnecdote = await anecdoteService.createNew(content);
		props.newAnecdote(addedAnecdote);
		sendNotification(content);
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
