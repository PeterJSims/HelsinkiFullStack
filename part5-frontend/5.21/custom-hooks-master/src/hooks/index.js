import { useState } from 'react';
import { axios } from 'axios';

export const useField = (type) => {
	const [ value, setValue ] = useState('');

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return {
		type,
		value,
		onChange
	};
};

export const useResource = (baseUrl) => {
	const [ resources, setResources ] = useState([]);
	let token = null;

	const setToken = (newToken) => {
		token = `bearer ${newToken}`;
	};

	const getAll = () => {
		const request = axios.get(baseUrl);
		return request.then((response) => response.data);
	};

	const create = async (newObject) => {
		const config = {
			headers: { Authorization: token }
		};

		const response = await axios.post(baseUrl, newObject, config);
		return response.data;
	};
	const service = {
		create,
		getAll
	};

	return [ resources, service ];
};
