const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');

beforeEach(async () => {
	await Blog.deleteMany({});

	const blogObjects = helper.blogs.map((blog) => new Blog(blog));
	const promiseArray = blogObjects.map((blog) => blog.save());
	await Promise.all(promiseArray);
});

describe('GET blog/blogs', () => {
	test('all blogs are returned', async () => {
		const response = await api.get('/api/blogs');

		expect(response.body.length).toBe(helper.blogs.length);
	});
	// test('blog has an id property', async () => {
	// 	const response = await api.get('/api/blogs');
	// 	expect(response.body[0]._id).toBeDefined();
	// });
});

describe('POST blog/blogs', () => {
	test('posting blog without title sends 400', async () => {
		await api.post('/api/blogs').send(helper.blogWithNoTitle).expect(400);
	});
	test('posting blog without url sends 400', async () => {
		await api.post('/api/blogs').send(helper.blogWithNoUrl).expect(400);
	});
	test('blog likes are defaulted to 0', async () => {
		const response = await api.post('/api/blogs').send(helper.blogWithNoLikes[0]);

		const blog = response.body;
		expect(blog.likes).toBe(0);
	});

	test('adding a blog is successful', async () => {
		const newBlog = {
			title: 'Here is a test blog',
			author: 'Peter',
			url: 'http://fullstackopen.com',
			likes: 1
		};

		await api.post('/api/blogs').send(newBlog).expect(201);
		const blogsAtEnd = await helper.blogsInDb();

		expect(blogsAtEnd.length).toBe(helper.blogs.length + 1);
	});
});

afterAll(() => {
	mongoose.connection.close();
});
