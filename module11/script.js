// Section 1: Array Destructuring

const books = ["fiction", ["horror", "literary"], "science"];

// TODO: Use destructuring to create the variables fiction horror literary and science
let [fiction, [horror, literary], science] = books;
////

// Section 2: Object Destructuring

const Student = {
  firstName: "Joe",
  university: "MIT",
  studentInfo: {
    studentid: 555,
  },
};

// TODO: Use destructuring to create the variables firstName university and studentid
let {firstName, university, studentid: { studentInfo } } = Student;
////

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    fiction,
    horror,
    literary,
    science,
    firstName,
    university,
    studentid,
  };
}
