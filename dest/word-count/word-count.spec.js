'use strict';

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
  var output = {};
  // var ray = string.split(/\s+|\n+/); // split based on whitespace (tabs, space, etc.)
  var ray = string.trim().split(/[\s\n\t]+/); // split based on whitespace (tabs, space, etc.)

  // init every word as a key for the output
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;

      if (ray.length !== 0) {
        // get current word
        // word = ray[i];
        // lowercase just to keep the count case-insensitive
        word = word.toLowerCase();
        output[word] = 0; // init to 0 at first
      }
    }

    // increase count for each word
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = ray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _word = _step2.value;

      // word = ray[i]; // get current word;
      _word = _word.toLowerCase(); // lowercase just to keep the count case-insensitive

      console.log('' + output[_word]);
      output[_word]++; // otherwise just add one to the count
      console.log(_word);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  console.log('');
  console.log('Results: ');

  // output for sanity check and debugging
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = output[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _word2 = _step3.value;

      console.log('' + _word2);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  console.log('--------: ');
  // console.log(`--------: `);
  return output;
}

count('word');

// / -- do not edit below ---

xdescribe('count()', function () {
  it('counts one word', function () {
    var expectedCounts = { word: 1 };
    expect(count('word')).toEqual(expectedCounts);
  });

  it('counts one of each', function () {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    expect(count('one of each')).toEqual(expectedCounts);
  });

  it('counts multiple occurrences', function () {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  it('includes punctuation', function () {
    var expectedCounts = { car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 };
    expect(count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  it('includes numbers', function () {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(count('testing 1 2 testing')).toEqual(expectedCounts);
  });

  it('normalizes to lowercase', function () {
    var expectedCounts = { go: 3 };
    expect(count('go Go GO')).toEqual(expectedCounts);
  });

  it('counts properly international characters', function () {
    var expectedCounts = { '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 };
    expect(count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  it('counts multiline', function () {
    var expectedCounts = { hello: 1, world: 1 };
    expect(count('hello\nworld')).toEqual(expectedCounts);
  });

  it('counts tabs', function () {
    var expectedCounts = { hello: 1, world: 1 };
    expect(count('hello\tworld')).toEqual(expectedCounts);
  });

  it('counts multiple spaces as one', function () {
    var expectedCounts = { hello: 1, world: 1 };
    expect(count('hello  world')).toEqual(expectedCounts);
  });

  it('does not count leading or trailing whitespace', function () {
    var expectedCounts = { introductory: 1, course: 1 };
    expect(count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  it('handles properties that exist on Object’s prototype', function () {
    var expectedCounts = {
      reserved: 1, words: 1, like: 1, constructor: 1, and: 1, tostring: 1, 'ok?': 1 };
    expect(count('reserved words like constructor and toString ok?')).toEqual(expectedCounts);
  });
});