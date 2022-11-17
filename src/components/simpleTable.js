import { React } from 'react';
import markSheets from '../core/service/markSheet';
import student from '../core/service/data1';

const titleStyle = {
	textAlign: 'center',
	fontSize: '15pz',
	color: 'black',
	margin: 'auto',
};

const headerStyle = {
	border: '3px solid black',
	margin: 'auto',
	paddingLeft: '130px',
};

const textStyle = {
	background: 'pink',
	border: '3px solid black',
	fontSize: '20px',
	height: '20px',
	width: '100px',
	paddingRight: '4px',
	textAlign: 'left',
	color: 'black',
};

const tableStyle = {
	background: 'pink',
	border: '3px solid black',
	fontSize: '20px',
	height: '25px',
	paddingRight: '4px',
	textAlign: 'right',
	fontWeight: 'bold',
	borderCollapse: 'collapse',
};

const numberStyle = {
	...textStyle,
	paddingRight: '4px',
	textAlign: 'right',
};

// eslint-disable-next-line max-lines-per-function
const SimpleTable = () =>
	<div>
		<h1 style={ titleStyle }>MarkSheet</h1>
		<table style={ tableStyle }>
			<thead>
				<tr>
					{
						student.map((data, key) =>
							<th key={ key } style={ headerStyle }>{data}</th>)
					}
				</tr>
			</thead>
			<tbody>
				{markSheets.map((data, key) =>
					<tr key={ key }>
						<td style={ numberStyle }>{data.rollNo}</td>
						<td style={ textStyle }>{data.name }</td>
						<td style={ numberStyle }>{data.tamil}</td>
						<td style={ numberStyle }>{data.english}</td>
						<td style={ numberStyle }>{data.maths}</td>
						<td style={ numberStyle }>{data.science}</td>
						<td style={ numberStyle }>{data.social}</td>
					</tr>)}
			</tbody>
		</table>
	</div>;

export default SimpleTable;
