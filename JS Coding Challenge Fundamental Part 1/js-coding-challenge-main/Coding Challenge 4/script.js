const value1 = 275;
const value2 = 40;
const value3 = 430;

// if else statement

if (value1 >= 50 && value1 <= 300) {
  console.log(value1 * 0.15);
} else {
  console.log(value1 * 0.2);
}

if (value2 >= 50 && value2 <= 300) {
  console.log(value2 * 0.15);
} else {
  console.log(value2 * 0.2);
}

if (value3 >= 50 && value3 <= 300) {
  console.log(value3 * 0.15);
} else {
  console.log(value3 * 0.2);
}

// using ternary operator

const tip1 = value1 >= 50 && value1 <= 300 ? value1 * 0.15 : value1 * 0.2;
console.log(
  `The bill was ${value1}, the tip was ${tip1}, and the total value ${
    value1 + tip1
  }`
);

const tip2 = value2 >= 50 && value2 <= 300 ? value2 * 0.15 : value2 * 0.2;
console.log(
  `The bill was ${value2}, the tip was ${tip2}, and the total value ${
    value2 + tip2
  }`
);

const tip3 = value3 >= 50 && value3 <= 300 ? value3 * 0.15 : value3 * 0.2;
console.log(
  `The bill was ${value3}, the tip was ${tip3}, and the total value ${
    value3 + tip3
  }`
);
