import { React } from 'react';
import markSheets from '../core/service/markSheet';
import student from '../core/service/studentData';
import addFields from '../core/service/studentDetail';

const tableHeader = (data, key) =>
	<th key={ key } className="headerStyle">{data}</th>;

const tableBody = (markSheet, key) =>
	<tr key={ key }>
		<td className="numberStyle">{markSheet.rollNo}</td>
		<td className="textStyle">{markSheet.name }</td>
		<td className="numberStyle">{markSheet.tamil}</td>
		<td className="numberStyle">{markSheet.english}</td>
		<td className="numberStyle">{markSheet.maths}</td>
		<td className="numberStyle">{markSheet.science}</td>
		<td className="numberStyle">{markSheet.social}</td>
		<td className="numberStyle">{markSheet.total}</td>
		<td className="numberStyle">{markSheet.result}</td>
		<td className="numberStyle">{markSheet.rank}</td>
	</tr>;

// eslint-disable-next-line max-lines-per-function
const SimpleTable = () =>
	<div>
		<h1 className="titleStyle">MarkSheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{student.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{addFields(markSheets).map(tableBody)}
			</tbody>
		</table>
	</div>;

export default SimpleTable;
