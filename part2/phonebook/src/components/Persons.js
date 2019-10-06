import React from 'react';

const Persons = ({ persons, newFilter, handleDelete }) => {
	const rows = () =>
		persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person) => (
			<div key={person.name}>
				{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button>
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
