import React from 'react';
import { newAnecdote } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		e.target.anecdote.value = '';
		props.newAnecdote(content);
		props.addNotification(content, 5000);
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
