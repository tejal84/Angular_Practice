var emp = {
    name: "Tejal",
    score: 250
};
for (var e in emp) {
    console.log(e);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
var arr = [20, 50, 12, 100, 20];
arr.splice(2, 3, 88, 99);
console.log(arr.toString);
function addssss(num1, num2) {
    return num1 + num2;
}
console.log(addssss(10, 10));
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");
