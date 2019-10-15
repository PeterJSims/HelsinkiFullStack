import React, { useState } from 'react';
import blogService from '../services/blogs';

const Blog = ({ blog }) => {
	const [ fullView, setFullView ] = useState(false);

	const handleClick = () => {
		setFullView(!fullView);
	};

	const handleLike = async (event) => {
		event.preventDefault();
		await blogService.addLike(blog);
		setFullView(true);
	};

	if (fullView) {
		console.log(blog);
		return (
			<div onClick={handleClick} className="full-view">
				<div>
					{blog.title} {blog.author}
				</div>
				<a href={blog.url}>{blog.url}</a>
				<div>
					{blog.likes} likes
					<button onClick={handleLike}>like</button>
				</div>
				<div>added by {blog.user.name}</div>
			</div>
		);
	}

	return (
		<div onClick={handleClick}>
			{blog.title} {blog.author}
		</div>
	);
};

export default Blog;
