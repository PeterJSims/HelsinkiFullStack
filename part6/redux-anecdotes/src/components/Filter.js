import React from 'react';
import { addFilter } from '../reducers/filterReducer';

const Filter = ({ store }) => {
	const handleChange = (e) => {
		store.dispatch(addFilter(e.target.value));
	};
	return (
		<div>
			Filter Content
			<div>
				<input onChange={handleChange} />
			</div>
		</div>
	);
};

export default Filter;
