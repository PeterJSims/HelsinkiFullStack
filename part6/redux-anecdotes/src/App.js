import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Anecdotes from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import anecdoteService from './services/anecdotes';

const App = (props) => {
	useEffect(() => {
		anecdoteService.getAll().then((anecdotes) => props.initializeAnecdotes(anecdotes));
	});
	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification />
			<Filter />
			<AnecdoteForm />
			<Anecdotes />
		</div>
	);
};

export default connect(null, { initializeAnecdotes })(App);
