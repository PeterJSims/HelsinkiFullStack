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

test('all blogs are returned', async () => {
	const response = await api.get('/api/blogs');

	expect(response.body.length).toBe(helper.blogs.length);
});

// test('blog has an id property', async () => {
// 	const response = await api.get('/api/blogs');
// 	expect(response.body[0]._id).toBeDefined();
// });

afterAll(() => {
	mongoose.connection.close();
});
