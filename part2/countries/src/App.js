import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

function App() {
	const [ countries, setCountries ] = useState([]);
	const [ newFilter, setNewFilter ] = useState('');

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => setCountries(response.data));
	});

	const handleFilter = (e) => {
		setNewFilter(e.target.value);
	};

	const results = countries.filter((country) => country.name.toLowerCase().includes(newFilter.toLowerCase()));

	return (
		<div>
			<h3>Find Countries:</h3>
			<input value={newFilter} onChange={handleFilter} />
			<Countries countries={results} />
		</div>
	);
}

export default App;
