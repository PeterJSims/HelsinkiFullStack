import React from 'react';
import { render, waitForElement } from '@testing-library/react';
jest.mock('./services/blogs');
import App from './App';

describe('<App />', () => {
	test('if no user logged, notes are not rendered', async () => {
		const component = render(<App />);
		component.rerender(<App />);

		await waitForElement(() => component.getAllByText('Login')[1]);

		const blogs = component.container.querySelectorAll('.blog');
		expect(blogs.length).toBe(0);
	});

	// test('if a user is logged, notes are rendered', async () => {
	// 	const user = {
	// 		username: 'tester',
	// 		token: '1231231214',
	// 		name: 'Donald Tester'
	// 	};

	// 	localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
	// 	const component = render(<App />);
	// 	component.rerender(<App />);

	// 	await waitForElement(() => component.container.querySelector('.blog'));
	// 	const blogs = component.container.querySelectorAll('.blog');
	// 	expect(blogs.length).toBe(3);
	// });
});
