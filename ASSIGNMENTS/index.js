var student = [
  { id: "101", name: "John", dob: 1994, mark: 300 },
  { id: "102", name: "Alex", dob: 1998, mark: 270 },
  { id: "103", name: "manu", dob: 1995, mark: 290 },
];
/***********find the id of value MANU***************** */
console.log(student[2]["id"]);
var a = student[0]["mark"];
var b = student[1]["mark"];
var c = student[2]["mark"];
//console.log(a);
//console.log(b);
//console.log(c);
/***********find the highest mark***************** */
var max = Math.max(a, b, c);
console.log(max);
/***********find the first element of json***************** */
console.log(student[0]);
