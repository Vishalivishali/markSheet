import { React, useState } from 'react';
import './App.scss';
import SimpleTable from './components/simpleTable';
import finalMarkSheet from './core/service/StudentDetails';
import TextInput from './components/TextInput';
import markSheets from './core/service/markSheet';
import AddButton from './components/AddButton';

const getInitialState = (context) => ({
	currentMarkSheet: finalMarkSheet.getStudentsMark(context),
	studentMarkSheet: markSheets,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<SimpleTable { ...extendedContext }/>
		<TextInput { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
	</div>;
};

export default App;
