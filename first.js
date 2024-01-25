// console.log("hellow");
// fullName = "tony stark";
// let x;
// let y = null;

// const student = {
//   fullName: "muneeb",
//   age: 20,
//   marks: 9.2,
//   isPass: false,
// };

// student["age"] = 31;
// console.log(student.age);
// console.log(student["age"]);

// practice:

// const product = {
//     productName: "Pen",
//     rating: 4,
//     offer:5+"%",
//     price: 285
// };

// const profile = {
//     profileName: "@user",
//     followers: 55 + "k",
//     following:500+"k",
//     posts: 20
// };
// console.log(typeof profile["followers"]);
// console.log(typeof profile["profileName"]);
// console.log(typeof profile["posts"]);

// conditional structure

// let mode = "dark";
// let color;

// if (mode === "black") {
//   color = "black";
// } else if (mode === "dark") {
//   color = "dark";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "chutiya";
// }

// console.log(color);

// Ternary Operators

// let age = 19;
// age > 18 ? console.log("adult") : console.log("child") ;

// let number = prompt("Enter a nymber");
// number % 5 == 0 ? console.log("Number is multiple of 5") : console.log("number isnt");

// if(number % 5 === 0){
//     console.log(number, "Number is multiple of 5");
// }
// else{
//     console.log(number, "number isnt");
// }

// let score = 90;
// if (score >= 90 && score <= 100) {
//     console.log("A grade");
// }
// else if (score >= 70 && score <= 89) {
//     console.log("B grade");
// }
// else if (score >= 60 && score <= 69) {
//     console.log("C grade");
// }
// else if (score >= 50 && score <= 59) {
//     console.log("D grade");
// }
// else if (score >= 0 && score <= 49) {
//     console.log("F grade");
// }
// else{
//     console.log("invalid choice");
// }

// For-of loop

// let str = "Chutiyaaaa";
// let length = 0;
// for(let i of str){
//     console.log("i =", i);
//     length ++;
// }
// console.log(length);

// for-in loop

// const student ={
//     fullName: "Muni",
//     age: 20,
//     address: "Pakistan",
//     marks: 51,
//     isPass: true
// };

// for (i in student){
//     console.log(i, student[i]);
// }

// n = 1;
// for(let i = n; i<=100; i++ ){
//     if(i % 2 === 0){
//         console.log(`${i} is even number`);
//     }
// }

// let gameNumber = 25;
// let userNumber = prompt("Enter a number");
// while (userNumber != gameNumber) {
//     userNumber = prompt("Enter a number again");
// }
// alert(userNumber + " You enter true number")
// console.log(userNumber, "You enter true number");

// let str = "Chalo thek hai";
// console.log(str.length);
// console.log(str[0]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim()); // remove spaces from start and end only.

// let str2 = "12345";
// console.log(str2.slice(2, 4));

// let res = str.concat(str2);
// console.log(res);
// console.log(str2.replace(3, 9));

// let str3 = "heelloolloolloo";
// console.log(str3.replace("lo", "a"));
// console.log(str3.charAt(2));

// let fullName = prompt("Enter your fullname");
// let length = fullName.length;
// console.log("@" + fullName + length);

// for-of

// let heros = ["ironman", "batman", "superman", "scarlett johnsom", "Ant man"];
// for (let el of heros) {
//   console.log(el.toUpperCase());
// }

// Avg of array

// let marks = [22, 33, 55, 77, 22, 66];
// let sum = 0,
//   avg = 0;
// for (let val of marks) {
//   sum += val;
// }
// console.log(`The avg is ${(avg = marks.length)}`);

// Offer on items
// let items = [100, 424, 653, 753, 421];
// let offer = 0;
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer;
// }
// console.log(`the price after discount on item ${items}`);

//using for-of

// let items = [100, 424, 653, 753, 421];
// let i = 0;
// for (let val of items) {
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`Value after discount is ${items[i]}`);
//   i++;
// }

// Push() to add some thing in array

// let items = [100, 424, 653, 753, 421];
// items.push(43);
// console.log(items);

// Pop() to delete from end in array

// let items = ["ironman", "batman", "superman", "scarlett johnsom", "Ant man"];
// console.log(items);
// let deleteditem = items.pop();
// console.log(items);
// console.log("deleteitems: ", deleteditem);

// toString() used to convert array to string
// let items = [100, 424, 653, 753, 421];
// console.log(items.toString());

// concatination

// let heros = ["ironman", "batman", "super?man"];
// let heros_ = ["scarlett johnsom", "Ant man"];
// let chuttu = heros.concat(heros_);
// console.log(chuttu);

// unshift( ) add something to start in array
// let heros_ = ["scarlett johnsom", "Ant man"];
// heros_.unshift("joker");
// console.log(heros_);

// shift() is used to delete something from start

// let heros_ = ["Kutta", "scarlett johnsom", "Ant man"];
// let deletehero = heros_.shift();
// console.log(heros_);
