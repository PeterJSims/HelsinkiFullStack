import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
	const res = await axios.get(baseUrl);
	return res.data;
};

const createNew = async (content) => {
	const obj = { content, votes: 0 };
	const res = await axios.post(baseUrl, obj);
	return res.data;
};

//FIX VOTING ON DB
const increaseVote = async (id) => {
	const res = await axios.put(baseUrl, id);
};

export default { getAll, createNew, increaseVote };
