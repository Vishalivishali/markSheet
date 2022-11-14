import { React } from 'react';
import './App.scss';
import getCompensations from './data';

const getOutput = ({ name, amount }) =>
	`${ name } got ${ amount }.`;

const App = () => {
	const compensations = getCompensations();
	const lines = compensations.map((compensation, key) =>
		<div
			key={ key }
			style={ {
				background: 'Red',
				border: '10px solid blue',
				marginTop: '5px',
			} }
		>
			{ getOutput(compensation)}
		</div>);

	// eslint-disable-next-line no-console
	console.log({ compensations, lines });

	return <div>
		<h1>Compensations</h1>
		<div> { lines }</div>
	</div>;
};

export default App;
