/* eslint-disable max-lines-per-function */
import { keys } from '@laufire/utils/lib';
import React from 'react';

const TextInput = (context) => {
	const { state, setState } = context;
	const { currentMarkSheet } = state;

	return (
		<div>
			{ keys(currentMarkSheet).map((header, key) =>
				<span key={ key }>
					<label>{ header }</label>
					<input
						type="text"
						placeholder="value"
						style={ { width: '100px', paddingRight: '30px' } }
						onChange={ ({ target: { value }}) => setState({
							...state,
							currentMarkSheet: { ...currentMarkSheet,
								[header]: value },
						}) }
					/>
				</span>)}
		</div>);
};

export default TextInput;
