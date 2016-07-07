/*
# Word Count

Write a program that given a phrase can count the occurrences of each word in that phrase.

For example for the input `"olly olly in come free"`

```plain
olly: 2
in: 1
come: 1
free: 1
```

### Instructions
1. Review the description, and create a count method that returns an object.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your word-count.js file on Slack.

*/

// will return an object with format: {word : wordcount}
function count(string) {
  const output = {};
	// var ray = string.split(/\s+|\n+/); // split based on whitespace (tabs, space, etc.)
  const ray = string.trim().split(/[\s\n\t]+/); // split based on whitespace (tabs, space, etc.)

	// init every word as a key for the output
  for (let word of ray) {
    if (ray.length !== 0) {
      // get current word
      // word = ray[i];
      // lowercase just to keep the count case-insensitive
      word = word.toLowerCase();
      output[word] = 0; // init to 0 at first
    }
  }

	// increase count for each word
  for (let word of ray) {
    // word = ray[i]; // get current word;
    word = word.toLowerCase(); // lowercase just to keep the count case-insensitive

    console.log(`${output[word]}`);
    output[word]++; // otherwise just add one to the count
    console.log(word);
  }

  console.log('');
  console.log('Results: ');

	// output for sanity check and debugging
  for (const word of Object.keys(output)) {
    console.log(`${word}`);
  }

  console.log('--------: ');
	// console.log(`--------: `);
  return output;
}

count('word');

// / -- do not edit below ---

xdescribe('count()', () => {
  it('counts one word', () => {
    const expectedCounts = { word: 1 };
    expect(count('word')).toEqual(expectedCounts);
  });

  it('counts one of each', () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(count('one of each')).toEqual(expectedCounts);
  });

  it('counts multiple occurrences', () => {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  it('includes punctuation', () => {
    const expectedCounts = { car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 };
    expect(count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  it('includes numbers', () => {
    const expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(count('testing 1 2 testing')).toEqual(expectedCounts);
  });

  it('normalizes to lowercase', () => {
    const expectedCounts = { go: 3 };
    expect(count('go Go GO')).toEqual(expectedCounts);
  });

  it('counts properly international characters', () => {
    const expectedCounts = { '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 };
    expect(count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  it('counts multiline', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(count('hello\nworld')).toEqual(expectedCounts);
  });

  it('counts tabs', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(count('hello\tworld')).toEqual(expectedCounts);
  });

  it('counts multiple spaces as one', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(count('hello  world')).toEqual(expectedCounts);
  });

  it('does not count leading or trailing whitespace', () => {
    const expectedCounts = { introductory: 1, course: 1 };
    expect(count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  it('handles properties that exist on Object’s prototype', () => {
    const expectedCounts = {
      reserved: 1, words: 1, like: 1, constructor: 1, and: 1, tostring: 1, 'ok?': 1 };
    expect(count('reserved words like constructor and toString ok?')).toEqual(expectedCounts);
  });
});
