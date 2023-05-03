"use strict";

const calcAverageDolphins = (scoreA, scoreB, scoreC) => {
  return (scoreA + scoreB + scoreC) / 3;
};

const calcAverageKoalas = (scoreA, scoreB, scoreC) => {
  return (scoreA + scoreB + scoreC) / 3;
};

console.log(calcAverageDolphins(85, 54, 41), calcAverageKoalas(23, 34, 27));

// const CheckWinner = (AvgDolphins, AvgKoalas) => {
//   const Dolphins = calcAverageDolphins(AvgDolphins);
//   const Koalas = calcAverageKoalas(AvgKoalas);
//   if (Dolphins >= 2 * Koalas) {
//     console.log(`Dolphins win ${Dolphins} vs ${Koalas}`);
//   } else if (AvgKoalas >= 2 * AvgDolphins) {
//     console.log(`Koalas win ${Koalas} vs ${Dolphins}`);
//   } else {
//     console.log("No one wins");
//   }
// };

function CheckWinner() {
  const Dolphins = calcAverageDolphins(85, 54, 41);
  const Koalas = calcAverageKoalas(23, 34, 27);
  if (Dolphins >= 2 * Koalas) {
    console.log(`Dolphins win ${Dolphins} vs ${Koalas}`);
  } else if (Koalas >= 2 * Dolphins) {
    console.log(`Koalas win ${Koalas} vs ${Dolphins}`);
  } else {
    console.log("No one wins");
  }
}

console.log(CheckWinner());
