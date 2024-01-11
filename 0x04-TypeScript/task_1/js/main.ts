interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;

  constructor(data: {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.fullTimeEmployee = data.fullTimeEmployee;
    this.yearsOfExperience = data.yearsOfExperience;
    this.location = data.location;

    for (const key in data) {
      if (key !== 'firstName' && key !== 'lastName' && key !== 'fullTimeEmployee' && key !== 'yearsOfExperience' && key !== 'location') {
        this[key] = data[key];
      }
    }
  }
}
