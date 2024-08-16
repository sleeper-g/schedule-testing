export default function isValide(numCard) {
  const numCardInt = numCard.match(/\d/g).join("");
  let sum = 0;
  if (numCardInt.length % 2 === 0) {
    for (let i = 0; i < numCardInt.length; i++) {
      if (i % 2 === 0) {
        if (numCardInt[i] * 2 > 9) {
          sum += +numCardInt[i] * 2 - 9;
        } else {
          sum += +numCardInt[i] * 2;
        }
      } else {
        sum += +numCardInt[i];
      }
    }
  } else {
    for (let i = 0; i < numCardInt.length; i++) {
      if (i % 2 !== 0) {
        if (numCardInt[i] * 2 > 9) {
          sum += +numCardInt[i] * 2 - 9;
        } else {
          sum += +numCardInt[i] * 2;
        }
      } else {
        sum += +numCardInt[i];
      }
    }
  }
  return sum % 10 === 0;
}
