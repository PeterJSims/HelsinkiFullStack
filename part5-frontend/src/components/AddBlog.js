import React, { useState } from 'react';
import PropTypes from 'prop-types';

import blogService from '../services/blogs';

const AddBlog = ({ handleSubmit }) => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ url, setUrl ] = useState('');

	const handleAdd = async (event) => {
		// event.preventDefault();
		const newBlog = await blogService.create({ title, author, url });
		if (newBlog) {
			setAuthor('');
			setTitle('');
			setUrl('');
		}
		return newBlog;
	};

	return (
		<div>
			<h2>Create a New Blog</h2>
			<form onSubmit={handleAdd}>
				<div>
					Title:
					<input type="text" value={title} name="title" onChange={({ target }) => setTitle(target.value)} />
				</div>
				<div>
					Author:
					<input
						type="text"
						value={author}
						name="author"
						onChange={({ target }) => setAuthor(target.value)}
					/>
				</div>
				<div>
					Url:
					<input type="text" value={url} name="url" onChange={({ target }) => setUrl(target.value)} />
				</div>
				<button>Create</button>
			</form>
		</div>
	);
};

AddBlog.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};

export default AddBlog;
