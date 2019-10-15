import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
	token = `bearer ${newToken}`;
};

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const create = async ({ title, author, url }) => {
	const config = {
		headers: { Authorization: token }
	};

	const response = await axios.post(baseUrl, { title, author, url }, config);
	return response.data;
};

const update = (id, newObject) => {
	const request = axios.put(`${baseUrl}/ ${id}`, newObject);
	return request.then((response) => response.data);
};

const remove = (id) => {
	const req = axios.delete(`${baseUrl}/${id}`, {
		headers: { Authorization: token }
	});
	return req.then((res) => res.data);
};

const addLike = (obj) => {
	obj.likes += 1;
	const req = axios.put(`${baseUrl}/${obj.id}`, obj, {
		headers: { Authorization: token }
	});
	return req.then((res) => res.data);
};

export default { getAll, create, update, setToken, addLike, remove };
