import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Add from './components/Add';
import axios from 'axios';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ newFilter, setNewFilter ] = useState('');

	useEffect(() => {
		axios.get('http://localhost:3001/persons').then((response) => {
			setPersons(response.data);
		});
	}, []);

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
