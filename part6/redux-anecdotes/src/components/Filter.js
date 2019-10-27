import React from 'react';
import { addFilter } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = (props) => {
	const handleChange = (e) => {
		props.addFilter(e.target.value);
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

const mapDispatchToProps = {
	addFilter
};

export default connect(null, mapDispatchToProps)(Filter);
