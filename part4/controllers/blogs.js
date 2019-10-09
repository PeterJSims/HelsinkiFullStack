const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response) => {
	const blogs = await Blog.find({});
	response.json(blogs);
});

blogsRouter.post('/', async (request, response) => {
	const blog = new Blog(request.body);
	if (!blog.likes) {
		blog.likes = 0;
	}
	if (!blog.title) {
		return response.status(400).json({ error: 'no title provided' });
	}
	if (!blog.url) {
		return response.status(400).json({ error: 'no url provided' });
	}

	const addedBlog = await blog.save();
	response.status(201).json(addedBlog);
});

module.exports = blogsRouter;
