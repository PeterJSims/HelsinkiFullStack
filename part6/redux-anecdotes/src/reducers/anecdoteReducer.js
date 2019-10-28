import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'INCREASE_VOTE':
			return state
				.map(
					(anecdote) =>
						anecdote.id !== action.data.id ? anecdote : { ...anecdote, votes: anecdote.votes + 1 }
				)
				.sort((a, b) => (a.votes < b.votes ? 1 : -1));
		case 'NEW_ANECDOTE':
			return [ ...state, action.data ];
		case 'INIT_ANECDOTES':
			return action.data;
		default:
			return state;
	}
};

export const voteIncrease = (object) => {
	return async (dispatch) => {
		const data = await anecdoteService.increaseVote(object);
		dispatch({
			type: 'INCREASE_VOTE',
			data: data
		});
	};
};

export const newAnecdote = (content) => {
	return async (dispatch) => {
		const data = await anecdoteService.createNew(content);
		dispatch({
			type: 'NEW_ANECDOTE',
			data: data
		});
	};
};

export const initializeAnecdotes = () => {
	return async (dispatch) => {
		const data = await anecdoteService.getAll();
		dispatch({
			type: 'INIT_ANECDOTES',
			data: data
		});
	};
};

export default reducer;
