import React from 'react';
import { voteIncrease } from '../reducers/anecdoteReducer';
import { addNotification } from '../reducers/notificationReducer';

const Anecdotes = ({ store }) => {
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
			{store.getState().anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Anecdotes;
