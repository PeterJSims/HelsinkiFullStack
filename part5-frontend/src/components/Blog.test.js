import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Blog from './Blog';

afterEach(cleanup);

const blog = {
	title: 'Test blog',
	author: 'Peter Sims',
	likes: 5,
	url: 'test.com',
	id: '22233343',
	user: {
		name: 'Peter Sims',
		username: 'Peter123',
		id: '3234234'
	}
};

let component;
let mockHandler;

beforeEach(() => {
	mockHandler - jest.fn();
	component = render(<Blog blog={blog} enableRemoveButton={true} onClick={mockHandler} />);
});

test('render initial state of Blog component', () => {
	expect(component.container).toHaveTextContent('Test blog');
});

test('Testing appearance of a single blog post', () => {});
