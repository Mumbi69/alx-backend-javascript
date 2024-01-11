import { Subjects, Teacher } from './js/subjects';

export const cTeacher: Teacher = {
  firstName: 'Mumbi',
  lastName: 'Wangari',
  experienceTeachingC: 10,
};

Subjects.cpp.setTeacher(cTeacher);
console.log('C++:', Subjects.cpp.getRequirements());
console.log('C++:', Subjects.cpp.getAvailableTeacher());

Subjects.java.setTeacher(cTeacher);
console.log('Java:', Subjects.java.getRequirements());
console.log('Java:', Subjects.java.getAvailableTeacher());

Subjects.react.setTeacher(cTeacher);
console.log('React:', Subjects.react.getRequirements());
console.log('React:', Subjects.react.getAvailableTeacher());
