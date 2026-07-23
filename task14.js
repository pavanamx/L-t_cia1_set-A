// Student object with admission date
let student = {
    id: 101,
    name: "Pavana",
    department: "AIML",
    admissionDate: new Date()
};

// Display student details
console.log("Student ID:", student.id);
console.log("Name:", student.name);
console.log("Department:", student.department);
console.log("Admission Date:", student.admissionDate.toDateString());