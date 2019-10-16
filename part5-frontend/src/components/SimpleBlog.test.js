import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

afterEach(cleanup);

const simpleBlog = {
	author: 'Peter Sims',
	title: 'simple test blog'
};

describe('Simple Blog', () => {
	test('render content', () => {
		const component = render(<SimpleBlog blog={simpleBlog} />);

		expect(component.container).toHaveTextContent('simple test blog');
	});

	test('click like button twice', () => {
		const mockHandler = jest.fn();

		const { getByText } = render(<SimpleBlog blog={simpleBlog} onClick={mockHandler} />);

		const button = getByText('like');
		fireEvent.click(button);
		fireEvent.click(button);

		expect(mockHandler.mock.calls.length).toBe(2);
	});
});
