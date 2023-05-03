const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage <= koalasAverage) {
  console.log("Koalas wins the trophy");
} else if (dolphinsAverage >= koalasAverage) {
  console.log("Dolphins win the trophy");
} else {
  console.log("No one win the trophy");
}

// Bonus 1

const dolphinsAverage1 = (97 + 112 + 101) / 3;
const koalasAverage1 = (109 + 95 + 123) / 3;

// alternate 1

if (dolphinsAverage1 >= koalasAverage1) {
  if (dolphinsAverage1 >= 100) {
    console.log("Dolphins win the trophy");
  } else {
    console.log("Dolphins lose the game");
  }
} else if (dolphinsAverage1 <= koalasAverage1) {
  if (koalasAverage1 >= 100) {
    console.log("Koalas win the trophy");
  } else {
    console.log("Koalas lose the game");
  }
} else {
  console.log("no one wins the trophy");
}

// alternate 2

if (dolphinsAverage1 <= koalasAverage1) {
  if ((dolphinsAverage1 || koalasAverage1) <= 100) {
    console.log("Dolphins wins the trophy");
  } else if ((dolphinsAverage1 || koalasAverage1) >= 100) {
    console.log("Koalas wins the trophy");
  }
} else {
  console.log("No one win the trophy");
}

// Bonus 2

// const dolphinsAverage2 = (97 + 112 + 101) / 3;
// const koalasAverage2 = (109 + 95 + 106) / 3;

// if (dolphinsAverage <= koalasAverage) {
//   console.log("Dolphins wins the trophy");
// } else if (dolphinsAverage >= koalasAverage) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("No one win the trophy");
// }
