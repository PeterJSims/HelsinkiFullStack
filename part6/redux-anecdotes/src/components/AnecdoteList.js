import React from 'react';
import { connect } from 'react-redux';
import { voteIncrease } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';

const Anecdotes = (props) => {
	const vote = (id, content) => {
		props.voteIncrease(id);
		sendNotification(content);
	};

	const sendNotification = (content) => {
		props.addNotification(`'${content}' been upvoted`);
		setTimeout(() => {
			props.addNotification(null);
		}, 5000);
	};
	return (
		<div>
			{props.anecdotes.map(
				(anecdote) =>
					anecdote.content.toLowerCase().includes(props.filter) ? (
						<div key={anecdote.id}>
							<p>{anecdote.content}</p>
							<p>
								{anecdote.votes} votes
								<button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
							</p>
						</div>
					) : null
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		notification: state.notification,
		anecdotes: state.anecdotes
	};
};

const mapDispatchToProps = {
	addNotification,
	voteIncrease
};

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes);
