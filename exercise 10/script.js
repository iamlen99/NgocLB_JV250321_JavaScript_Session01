//Su dung ham Math.abs - Tra ve gia tri tuyet doi cua mot so
let num1 = -5.5;
let num2 = 10;

let absoluteNum1 = Math.abs(num1);
let absoluteNum2 = Math.abs(num2);

console.log("Use Math.abs():");
console.log(absoluteNum1); // Ket qua: 5.5 vi gia tri tuyet doi cua -5.5 la 5.5
console.log(absoluteNum2); // Ket qua: 10 vi gia tri tuyet doi cua 10 la 10

//Su dung ham Math.ceil - Lam tron len so nguyen gan nhat
let num3 = 4.4;
let num4 = 5.8;

let ceilNum3 = Math.ceil(num3);
let ceilNum4 = Math.ceil(num4);

console.log("Use Math.ceil():");
console.log(ceilNum3); // Ket qua: 5 vi so nguyen gan nhat lon hon 4.4 la 5
console.log(ceilNum4); // Ket qua: 6 vi so nguyen gan nhat lon hon 5.8 la 6

//Su dung ham Math.floor - Lam tron xuong so nguyen gan nhat
let num5 = 5.7;
let num6 = 6.1;

let floorNum5 = Math.floor(num5);
let floorNum6 = Math.floor(num6);

console.log("Use Math.floor():");
console.log(floorNum5); // Ket qua: 5 vi so nguyen gan nhat nho hon 5.7 la 5
console.log(floorNum6); // Ket qua: 6 vi so nguyen gan nhat nho hon 6.1 la 6

//Su dung ham Math.ceil - Lam tron den so nguyen gan nhat
let num7 = 10.1;
let num8 = 20.6;

let roundNum7 = Math.round(num7);
let roundNum8 = Math.round(num8);

console.log("Use Math.round():");
console.log(roundNum7); // Ket qua: 10 vi so nguyen gan 10.1 nhat la 10
console.log(roundNum8); // Ket qua: 21 vi so nguyen gan 20.6 nhat la 21
