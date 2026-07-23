// Function to check pass/fail
function checkResult(id, name, marks) {
    if (marks >= 35) {
        return name + " (ID: " + id + ") - Pass";
    } else {
        return name + " (ID: " + id + ") - Fail";
    }
}

// Function call
console.log(checkResult(101, "Pavana", 90));
console.log(checkResult(102, "Rahul", 28));