import { React } from 'react';
import compensations from './data';

const rowStyle = {
	background: 'pink',
	marginTop: '5px',
	height: '50px',
	fontSize: '15px',
	fontFamily: 'Palatino',
	color: 'darkBlack',
	boxShadow: '4px 4px',
	textAlign: 'center',
};

const columnStyle = {
	display: 'inline-block',
	border: '1px solid purple',
	width: '150px',
};

const SimpleStyles = () => {
	const lines = compensations.map(({ name, amount }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ columnStyle }>{name}</span>
			<span style={ columnStyle }>{amount}</span>

		</div>);

	return <div>
		<h3> Compensations </h3>
		 <div> { lines } </div>
	</div>;
};

export default SimpleStyles;
