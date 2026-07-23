// Array of student objects
let students = [
    { id: 1, name: "Pavana", age: 20, marks: 85 },
    { id: 2, name: "Rahul", age: 21, marks: 78 },
    { id: 3, name: "Sneha", age: 19, marks: 92 },
    { id: 4, name: "Arjun", age: 20, marks: 88 }
];

// Loop through the array and print student details
for (let i = 0; i < students.length; i++) {
    console.log("Student ID:", students[i].id);
    console.log("Name:", students[i].name);
    console.log("Age:", students[i].age);
    console.log("Marks:", students[i].marks);
    console.log("----------------------");
}