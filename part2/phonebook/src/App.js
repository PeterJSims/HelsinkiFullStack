import React, { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Add from './components/Add';

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ newFilter, setNewFilter ] = useState('');

	const addEntry = (e) => {
		e.preventDefault();
		if (!persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
			setPersons(persons.concat({ name: newName, number: newNumber }));
			setNewName('');
			setNewNumber('');
		} else {
			alert(`${newName} is already added to phonebook`);
		}
	};

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handleNumberChange = (e) => {
		setNewNumber(e.target.value);
	};

	const handleFilterChange = (e) => {
		setNewFilter(e.target.value);
	};

	return (
		<div>
			<Filter value={newFilter} onChange={handleFilterChange} />
			<Add
				addEntry={addEntry}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<Persons persons={persons} newFilter={newFilter} />
		</div>
	);
};

export default App;
