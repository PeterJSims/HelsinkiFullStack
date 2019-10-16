import React, { useState } from 'react';
import blogService from '../services/blogs';

const Blog = ({ blog, user }) => {
	const [ fullView, setFullView ] = useState(false);

	const handleClick = () => {
		setFullView(!fullView);
	};

	const handleLike = async (event) => {
		event.preventDefault();
		await blogService.addLike(blog);
		setFullView(true);
	};
	const handleDelete = async (blogId, userId) => {
		const response = window.confirm(`Are you sure you want to delete this postt?`);
		if (response) {
			try {
				await blogService.remove(blogId, userId);
				window.location.reload();
			} catch (error) {
				console.log('Error deleting the post', error);
			}
		}
	};

	if (fullView) {
		return (
			<div onClick={handleClick} className="full-view blog">
				<div>
					{blog.title} {blog.author}
				</div>
				<a href={blog.url}>{blog.url}</a>
				<div>
					{blog.likes} likes
					<button onClick={handleLike}>like</button>
				</div>

				<div>added by {blog.user.name}</div>
				{blog.user.name === user.name ? (
					<div>
						<button onClick={() => handleDelete(blog.id, blog.user.id)}>remove</button>
					</div>
				) : null}
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
