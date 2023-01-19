import React from 'react';

const AddButton = (context) => {
	const { state: { studentMarkSheet, currentMarkSheet },
		setState, state } = context;

	return (
		<div className="add">
			<button onClick={ () =>
				setState({
					...state,
					studentMarkSheet: [...studentMarkSheet, currentMarkSheet],
				}) }
			>Add
			</button>
		</div>);
};

export default AddButton;
