import { React } from 'react';
import markSheets from '../core/service/markSheet';
import student from '../core/service/studentData';
import tableHeader from './TableHeader';
import tableBody from './TableBody';
import FinalMarkSheet from '../core/service/StudentDetails';
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
				{FinalMarkSheet.finalRank(markSheets).map(tableBody)}
			</tbody>
		</table>
	</div>;

export default SimpleTable;
