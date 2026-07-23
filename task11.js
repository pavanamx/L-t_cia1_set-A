
function checkResult(id, name, marks) {
    if (marks >= 35) {
        return name + " (ID: " + id + ") - Pass";
    } else {
        return name + " (ID: " + id + ") - Fail";
    }
}
console.log(checkResult(178, "Pavana", 90));
console.log(checkResult(182, "Ravi", 28));