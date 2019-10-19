import React from 'react';

const App = ({ store }) => {
	const good = () => {
		store.dispatch({
			type: 'GOOD'
		});
	};
	const neutral = () => {
		store.dispatch({
			type: 'NEUTRAL'
		});
	};
	const bad = () => {
		store.dispatch({
			type: 'BAD'
		});
	};

	return (
		<div>
			<button onClick={good}>good</button>
			<button onClick={neutral}>neutral</button>
			<button onClick={bad}>bad</button>
			<button>reset stats</button>
			<div>good {store.getState().good}</div>
			<div>neutral {store.getState().neutral} </div>
			<div>bad {store.getState().bad}</div>
		</div>
	);
};

export default App;
