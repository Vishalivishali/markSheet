import { React } from 'react';
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

export default tableBody;
