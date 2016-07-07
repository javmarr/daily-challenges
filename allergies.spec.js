/*
# Allergies

Write a program that, given a person's allergy score,
 can tell them whether or not they're allergic to a given item, and their full list of allergies.

An allergy test produces a single numeric score which contains the
information about all the allergies the person has (that they were
tested for).

The list of items (and their value) that were tested are:

* eggs (1)
* peanuts (2)
* shellfish (4)
* strawberries (8)
* tomatoes (16)
* chocolate (32)
* pollen (64)
* cats (128)

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Tom is allergic to any one of those allergens listed above.
- All the allergens Tom is allergic to.


### Instructions
1. Review the description, and create a Allergies class that has a list method and allergicTo.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your allergies.js file on Slack.

*/

// pads binary string to legth 8 if needed or removes extra stuff
function cleanUpBinary(str) {
  let output = str;
  if (output.length > 8) {
    output = output.substring(output.length - 8); // keep the 8 rightmost values;
  } else {
    while (output.length < 8) {
      output = `0${output}`;
    }
  }
  return output;
}

// returns a binary string of at least size 8
function dec2bin(dec) {
  const output = cleanUpBinary((dec >>> 0).toString(2));
  return output;
}

const Allergies = (score) => {
  this.allergicScore = score;
  this.aList =
  ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs'];
};

// given this.score, list the stuff they are allergic to
Allergies.prototype.list = () => {
  const binStr = dec2bin(this.allergicScore); // to binary string
  const outputList = []; // output ray
  console.log(binStr);

  // loop backwards so that it fits the testing
  for (let i = binStr.length - 1; i >= 0; i--) {
    console.log(`index: ${i} | ${binStr.charAt(i)} - ${this.aList[i]}`);
    // check aList
    if (binStr.charAt(i) === 1) {
      // 1 == true so they are allergic to it

      // push the food/thing to the outputList
      outputList.push(this.aList[i]);
    }
  }
  console.log('----------');
  return outputList; // return it
};

Allergies.prototype.allergicTo = (food) => {
  const ray = this.list();
  if (ray.indexOf(food) !== -1) {
    return true;
  }
  return false;
};

const testAllergies = new Allergies(8);
console.log(testAllergies.allergicScore);

const testList = testAllergies.list();
console.log('Output list:');
for (let i = 0; i < testList.length; i++) {
  console.log(testList[i]);
}

// -- do not edit below ---
describe('Allergies', () => {
  it('no allergies at all', () => {
    const allergies = new Allergies(0);
    expect(allergies.list()).toEqual([]);
  });

  it('allergies to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.list()).toEqual(['eggs']);
  });

  it('allergies to peanuts', () => {
    const allergies = new Allergies(2);
    expect(allergies.list()).toEqual(['peanuts']);
  });

  it('allergies to strawberries', () => {
    const allergies = new Allergies(8);
    expect(allergies.list()).toEqual(['strawberries']);
  });

  it('allergies to eggs and peanuts', () => {
    const allergies = new Allergies(3);
    expect(allergies.list()).toEqual(['eggs', 'peanuts']);
  });

  it('allergies to more than eggs but not peanuts', () => {
    const allergies = new Allergies(5);
    expect(allergies.list()).toEqual(['eggs', 'shellfish']);
  });

  it('allergic to lots of stuff', () => {
    const allergies = new Allergies(248);
    expect(allergies.list()).toEqual(['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  it('allergic to everything', () => {
    const allergies = new Allergies(255);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish', 'strawberries',
                                      'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  it('no allergic means not allergic', () => {
    const allergies = new Allergies(0);
    expect(allergies.allergicTo('peanuts')).toEqual(false);
    expect(allergies.allergicTo('cats')).toEqual(false);
    expect(allergies.allergicTo('strawberries')).toEqual(false);
  });

  it('allergic to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  it('allergic to eggs and other things', () => {
    const allergies = new Allergies(5);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  it('ignore non allergen score parts', () => {
    const allergies = new Allergies(509);
    expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries',
                                      'tomatoes', 'chocolate', 'pollen', 'cats']);
  });
});
