import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Add from './components/Add';
import Notification from './components/Notification';
import personsService from './services/persons';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ newFilter, setNewFilter ] = useState('');
	const [ notification, setNotification ] = useState(null);
	const [ styleType, setStyleType ] = useState(null);

	useEffect(() => {
		personsService.getAll().then((response) => {
			setPersons(response);
		});
	}, []);

	const addEntry = (e) => {
		e.preventDefault();
		if (persons.find((person) => person.name === newName)) {
			let entry = persons.find((person) => person.name === newName);
			let confirmUpdate = window.confirm(`Do you want to update the phone number for ${entry.name}?`);
			if (confirmUpdate) {
				const newPerson = { name: newName, number: newNumber };

				personsService.update(entry.id, newPerson).then((res) => {
					setPersons(persons.map((person) => (person.id === res.id ? res : person)));
				});

				setNotification(`${newName}'s number has been updated`);
				setStyleType('notification');
				setTimeout(() => {
					setNotification(null);
					setStyleType(null);
				}, 5000);
				setNewName('');
				setNewNumber('');
			}
		} else if (!persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
			const newPerson = { name: newName, number: newNumber };

			personsService.create(newPerson).then((res) => {
				setPersons(persons.concat(res));
			});

			setNotification(`${newName} has been added `);
			setStyleType('notification');
			setTimeout(() => {
				setNotification(null);
				setStyleType(null);
			}, 5000);

			setNewName('');
			setNewNumber('');
		} else {
			setNotification(`${newName} already exists `);
			setStyleType('error');
			setTimeout(() => {
				setNotification(null);
				setStyleType(null);
			}, 5000);
		}
	};

	const handleDelete = (id) => {
		const entry = persons.find((person) => person.id === id);
		let deleteAlert = window.confirm(`Are you sure you want to delete the entry ${entry.name}?`);

		if (deleteAlert) {
			personsService.remove(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id));
			});
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
			<Notification message={notification} type={styleType} />
			<Filter value={newFilter} onChange={handleFilterChange} />
			<Add
				addEntry={addEntry}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<Persons persons={persons} newFilter={newFilter} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
