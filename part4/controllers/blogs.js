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

blogsRouter.put('/:id', async (request, response) => {
	const body = request.body;

	const blog = {
		title: body.author,
		author: body.author,
		url: body.url,
		likes: body.likes
	};

	try {
		const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true });
		response.json(updatedBlog);
	} catch (error) {
		console.log(error);
		response.status(400).send({ error: error.message });
	}
});

blogsRouter.delete('/:id', async (request, response) => {
	try {
		await Blog.findByIdAndRemove(request.params.id);
		response.status(204).end();
	} catch (exception) {
		console.log(exception);
		response.status(400).json({ error: 'error with id' });
	}
});

module.exports = blogsRouter;
