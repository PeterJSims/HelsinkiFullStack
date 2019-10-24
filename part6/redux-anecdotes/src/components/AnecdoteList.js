import React from 'react';
import { voteIncrease } from '../reducers/anecdoteReducer';

const Anecdotes = ({ store }) => {
	const vote = (id) => {
		store.dispatch(voteIncrease(id));
	};
	return (
		<div>
			{store.getState().anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Anecdotes;
