//first method

const MarkFirstBMI = 78 / (1.69 * 1.69);
const MarkSecondBMI = 95 / (1.88 * 1.88);
const JohnFirstBMi = 92 / (1.95 * 1.95);
const JohnSecondBMI = 85 / (1.76 * 1.76);

if (MarkFirstBMI > JohnFirstBMi) {
  console.log(true);
} else {
  console.log(false);
}

if (MarkSecondBMI > JohnSecondBMI) {
  console.log(true);
} else {
  console.log(false);
}

//second method

const MarkFirstWeight = 78;
const MarkSecondWeight = 95;
const MarkFirstHeight = 1.69;
const MarkSecondHeight = 1.88;
const JohnFirstWeight = 92;
const JohnSecondWeight = 85;
const JohnFirstHeight = 1.95;
const JohnSecondHeight = 1.76;

const MarkHigherBMI =
  MarkFirstWeight / (MarkFirstHeight * MarkFirstHeight) >
  JohnFirstWeight / (JohnFirstWeight * JohnFirstWeight);

console.log(MarkHigherBMI);

const JohnHigherBMI =
  MarkSecondWeight / (MarkSecondHeight * MarkSecondHeight) >
  JohnSecondWeight / (JohnSecondHeight * JohnSecondHeight);

console.log(JohnHigherBMI);

// challenge 2 (if else)

if (MarkHigherBMI > JohnHigherBMI) {
  console.log(
    `Mark's BMI (${MarkFirstBMI}) is higher than John's (${JohnFirstBMi})`
  );
} else {
  console.log(
    `John's BMI (${JohnSecondBMI}) is higher than Mark's (${MarkSecondBMI})`
  );
}
