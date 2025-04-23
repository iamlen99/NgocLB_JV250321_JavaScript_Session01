let deposit = +prompt("Enter the bank deposit amount (VND):");
let month = +prompt("Enter the duration of the deposit (months):");
let annualInterestRate = 4.3 / 100; // Lai suat hang nam
let interest = (deposit * month * annualInterestRate) / 12;
alert("The interest you will earn is: " + interest.toFixed(0) + " VND");
