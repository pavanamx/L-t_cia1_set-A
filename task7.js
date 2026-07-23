
let students = [
    { id: 1, name: "Pavana", marks: 85 },
    { id: 2, name: "Raj", marks: 30 },
    { id: 3, name: "ravi", marks: 92 },
    { id: 4, name: "gopalan", marks: 28 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 35) {
        continue;
    }

    console.log(students[i].name + " - Marks: " + students[i].marks);
}