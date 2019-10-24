const initialAnecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0
	};
};

const initialState = initialAnecdotes.map(asObject);

const anecdoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE':
			return (
				state
					.map(
						(anecdote) =>
							anecdote.id !== action.data.id ? anecdote : { ...anecdote, votes: anecdote.votes + 1 }
					)
					//NOTE:  Check how to make it not resort every time!!
					.sort((a, b) => (a.votes < b.votes ? 1 : -1))
			);
		case 'NEW_ANECDOTE':
			return [ ...state, action.data ];
		default:
			return state;
	}
};

export const voteIncrease = (id) => {
	return { type: 'INCREASE', data: { id } };
};

export const newAnecdote = (content) => {
	return {
		type: 'NEW_ANECDOTE',
		data: {
			content,
			id: getId(),
			votes: 0
		}
	};
};

export default anecdoteReducer;
