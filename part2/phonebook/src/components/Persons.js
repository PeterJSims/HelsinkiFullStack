import React from 'react';

const Persons = ({ persons, newFilter }) => {
	const rows = () =>
		persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person) => (
			<div key={person.name}>
				{person.name} {person.number}
			</div>
		));
	return (
		<div>
			<h2>Numbers</h2>

			{rows()}
		</div>
	);
};

export default Persons;
