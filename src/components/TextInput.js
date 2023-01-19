/* eslint-disable max-lines-per-function */
import { keys } from '@laufire/utils/lib';
import React from 'react';

const TextInput = (context) => {
	const { state, setState } = context;
	const { currentMarkSheet } = state;

	return <div className="rollNo">
		{keys(currentMarkSheet).map((header, key) =>
			<div key={ key }>
				<label>{ header }</label>
				<input
					type="text"
					placeholder="value"
					onChange={ ({ target: { value }}) => setState({
						...state,
						currentMarkSheet: { ...currentMarkSheet,
							rollNo: value,
							name: value,
							tamil: value,
							english: value,
							maths: value,
							science: value,
							social: value },
					}) }
				/>
			</div>)}
	</div>;
};

export default TextInput;
