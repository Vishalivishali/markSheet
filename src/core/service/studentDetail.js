const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return tamil + english + maths + science + social;
};

const passMark = 35;

const getResult = (student) =>
	(Math.min(
		student.tamil,
		student.english,
		student.maths,
		student.science,
		student.social
	) >= passMark
		? 'Pass'
		: 'Fail');

const getRank = (students) => {
	let rank = 0;
	const sortedData = students.sort((a, b) => b.total - a.total);
	// eslint-disable-next-line no-return-assign
	const ranking = sortedData.map((student) => ({
		...student,
		rank: (student.result === 'Pass') ? rank += 1 : '-',
	}));

	return ranking;
};

const addFields = (students) => ({
	...students,
	total: getTotal(students),
	result: getResult(students),
});

const finalRank = (studentRecord) => {
	const finalData = studentRecord.map(addFields);

	return getRank(finalData);
};

export default finalRank;
