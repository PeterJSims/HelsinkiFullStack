import React from 'react';

const Filter = ({ value, onChange }) => {
	return (
		<div>
			<h2>Phonebook</h2>

			<input placeholder={'Filter your results'} value={value} onChange={onChange} />
		</div>
	);
};

export default Filter;
