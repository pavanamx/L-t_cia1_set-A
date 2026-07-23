// Array of student objects
let students = [
    { name: "Pavana", marks: 85 },
    { name: "Rahul", marks: 78 },
    { name: "Sneha", marks: 92 },
    { name: "Arjun", marks: 88 }
];

// Find the highest marks
let highestMarks = Math.max(
    students[0].marks,
    students[1].marks,
    students[2].marks,
    students[3].marks
);

console.log("Highest Marks:", highestMarks);