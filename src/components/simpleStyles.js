import { React } from 'react';
import markSheets from '../core/service/markSheet';

const rowStyle = {
	background: 'pink',
	fontSize: '20px',
	color: 'black',
	textAlign: 'center',
};

const columnStyle = {
	display: 'inline-block',
	border: '1px solid purple',
	width: '125px',
	padding: '3px',
	paddingRight: '64px',
	textAlign: 'right',
};

const headerStyle = {
	background: 'pink',
	border: '1px solid black',
	textAlign: 'center',
};

const titleStyle = {
	textTransform: 'upperCase',
	paddingLeft: '120px',
	fontSize: '25px',
	wordSpacing: '60px',
	fontWeight: 'bold',
	padding: '3px',
};

const textStyle = {
	...columnStyle,
	paddingLeft: '3px',
	textAlign: 'left',
};

// eslint-disable-next-line max-lines-per-function
const SimpleStyles = () => {
	// eslint-disable-next-line max-len
	const lines = markSheets.map(({ rollNo, name, tamil, english, maths, science, social }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ columnStyle }>{ rollNo }</span>
			<span style={ columnStyle }>{ name }</span>
			<span style={ columnStyle }>{ tamil }</span>
			<span style={ columnStyle }>{ english }</span>
			<span style={ columnStyle }>{ maths }</span>
			<span style={ columnStyle }>{ science }</span>
			<span style={ columnStyle }>{ social }</span>
		</div>);

	return <div>
		  <div style={ headerStyle }><h1>MarkSheet</h1></div>
		<div style={ titleStyle }>
			<span style={ textStyle }>RollNo</span>
			<span style={ textStyle }>Name</span>
			<span style={ textStyle }>Tamil</span>
			<span style={ textStyle }>English</span>
			<span style={ textStyle }>Maths</span>
			<span style={ textStyle }>Science</span>
			<span style={ textStyle }>Social</span>
		</div>
		<div> { lines } </div>
	</div>;
};

export default SimpleStyles;
