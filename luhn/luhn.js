// doubles every other digit on the input subtracting 9 if > 9
function getAddEnds(num) {
  // int array of the input split per digit: num
  const tempRay = (`${num}`).split('').map(Number);
  let makeDouble = 0;

  for (let i = tempRay.length - 1; i >= 0; i--) {
    // every other digit double the value
    if (makeDouble === 1) {
      tempRay[i] *= 2;
      if (tempRay[i] > 9) {
        tempRay[i] -= 9;
      }
      makeDouble = 0;
    } else {
      makeDouble++;
    }
  }
  return tempRay;
}

function isValid(num) {
  return num % 10 === 0;
}

function getSum(ray) {
  let output = 0;
  for (let i = 0; i < ray.length; i++) {
    output += ray[i];
  }
  return output;
}

const Luhn = function(num) {
  this.checkDigit = num % 10;
  this.addends = getAddEnds(num);
  this.checksum = getSum(this.addends);
  this.valid = isValid(this.checksum);
};

Luhn.create = (num) => {
  const addEnd = getAddEnds(num * 10); // add 0 digit to the right
  // console.log(`addend: ${addEnd}`);
  const checksum = getSum(addEnd);
  if (checksum % 10 !== 0) {
    return Number(`${num}${10 - (checksum % 10)}`);
  }
  return num * 10;
};

module.exports = Luhn;

/* module.exports = { Luhn }; would require
 * const Luhn = require('./luhn');  = exp.Luhn
 */
