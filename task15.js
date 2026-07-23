
let students = [
    { name: "Pavana", marks: 85 },
    { name: "Ravi", marks: 78 },
    { name: "raj", marks: 92 },
    { name: "gopal", marks: 88 }
];

let highestMarks = Math.max(
    students[0].marks,
    students[1].marks,
    students[2].marks,
    students[3].marks
);

console.log("Highest Marks:", highestMarks);