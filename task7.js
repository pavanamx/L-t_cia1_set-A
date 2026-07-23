// Array of student objects
let students = [
    { id: 1, name: "Pavana", marks: 85 },
    { id: 2, name: "Rahul", marks: 30 },
    { id: 3, name: "Sneha", marks: 92 },
    { id: 4, name: "Arjun", marks: 28 }
];

// Skip students who failed
for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 35) {
        continue;
    }

    console.log(students[i].name + " - Marks: " + students[i].marks);
}