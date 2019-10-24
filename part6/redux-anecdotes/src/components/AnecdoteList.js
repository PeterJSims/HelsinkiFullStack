import React from 'react';
import { voteIncrease } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';

const Anecdotes = ({ store }) => {
	const { anecdotes, filter } = store.getState();

	const vote = (id, content) => {
		store.dispatch(voteIncrease(id));
		sendNotification(content);
	};

	const sendNotification = (content) => {
		console.log(content);
		store.dispatch(addNotification(`'${content}' been upvoted`));
		setTimeout(() => {
			store.dispatch(addNotification(null));
		}, 5000);
	};
	return (
		<div>
			{anecdotes.map(
				(anecdote) =>
					anecdote.content.toLowerCase().includes(filter) ? (
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

export default Anecdotes;
