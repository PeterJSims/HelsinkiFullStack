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

const increaseVote = async (object) => {
	const response = await axios.put(`${baseUrl}/${object.id}`, { ...object, votes: object.votes + 1 });
	return response.data;
};

export default { getAll, createNew, increaseVote };
