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
	const sortedData = students.sort((a, b) => b.total - a.total);
	let rank = 1;

	const ranking = sortedData.map((student) => ({
		...student,
		rank: student.result === 'Pass' ? rank++ : '-',
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

const getStudentsMark = () => ({
	rollNo: 52,
	name: 'B',
	tamil: 92,
	english: 21,
	maths: 73,
	science: 71,
	social: 54,
});

const FinalMarkSheet = {
	finalRank,
	getStudentsMark,
};

export default FinalMarkSheet;
