import React from 'react';

const Add = ({ addEntry, newName, handleNameChange, newNumber, handleNumberChange }) => {
	return (
		<div>
			<h3>Add An Entry </h3>

			<form onSubmit={addEntry}>
				<div>
					name:{' '}
					<input
						minlength={3}
						placeholder="Enter a new name"
						value={newName}
						onChange={handleNameChange}
						required
					/>
				</div>
				<div>
					number:{' '}
					<input
						minlength={8}
						placeholder="Enter a phone number"
						value={newNumber}
						onChange={handleNumberChange}
						required
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</div>
	);
};

export default Add;
