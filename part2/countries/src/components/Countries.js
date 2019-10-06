import React from 'react';

const Countries = ({ countries }) => {
	if (countries.length === 1) {
		const country = countries[0];
		return (
			<div>
				<h2>{country.name}</h2>
				<div>Capital: {country.capital}</div>
				<div>Population: {country.population}</div>
				<h3>Languages</h3>
				<div>{country.languages.map((lang) => <li key={lang.name}>{lang.name}</li>)}</div>
				<div>
					<img src={country.flag} style={{ width: '200px' }} alt={`Flag of ${country.name}`} />
				</div>
			</div>
		);
	}

	return <div>{countries.map((country) => <li key={country.name}>{country.name}</li>)}</div>;
};

export default Countries;
