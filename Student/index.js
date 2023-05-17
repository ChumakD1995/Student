class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  present() {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = true;
    } else {
      console.log("Attendance is already full.");
    }
  }

  absent() {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = false;
    } else {
      console.log("Absent is already full.");
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Well done!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Good, but you can better!";
    } else {
      return "Radish!";
    }
  }
}

const student1 = new Student("Dmytro", "Chumak", 1995);
student1.grades = [95, 88, 92, 96, 85];
student1.present();
student1.present();
student1.present();

console.log(student1.firstName, student1.lastName, "Age:", student1.getAge());
console.log("Average Grade:", student1.getAverageGrade());
console.log("Summary:", student1.summary());

const student2 = new Student("Kate", "Smulska", 1995);
student2.grades = [90, 100, 86, 88, 93];
student2.present();
student2.present();
student2.absent();

console.log("Age:", student2.getAge());
console.log("Average Grade:", student2.getAverageGrade());
console.log("Summary:", student2.summary()); 

const student3 = new Student("Bogdan", "Schkapich", 1994);
student3.grades = [90, 90, 90, 90, 90];
student3.present();
student3.present();
student3.absent();

console.log("Age:", student3.getAge());
console.log("Average Grade:", student3.getAverageGrade());
console.log("Summary:", student3.summary()); 