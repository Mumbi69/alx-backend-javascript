export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter(student => student.location === city)
    .map(student => {
      const matchedGrade = newGrades.find(grade => grade.studentId === student.id);

      if (matchedGrade) {
        return {
          ...student,
          grade: matchedGrade.grade,
        };
      } else {
        return {
          ...student,
          grade: 'N/A',
        };
      }
    });
}
