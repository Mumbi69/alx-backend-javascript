export default function getStudentsIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
