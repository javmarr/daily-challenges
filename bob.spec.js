/*
# Bob

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

### Instructions
1. Review Bob's rules and return the appropriate response.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your bob.js file on Slack.

*/

function hey(string) {
  let output = '';

	// Whoa, chill out! for yelling
	// more than two caps together and no lower case in the string is yelling
  if (string.search(/[A-Z][A-Z]/) !== -1 && string.search(/[a-z]/) === -1) {
    output = 'Whoa, chill out!';
  } else if (string[string.length - 1] === '?') {
    // last char is '?'
    output = 'Sure.';
  } else if (string.trim().length === 0) {
    // Fine. Be that way! is you don't say anything
    output = 'Fine. Be that way!';
  } else {
    // Whatever. to anything else
    output = 'Whatever.';
  }

  return output;
}

//  -- do not edit below ---

describe('Bob', () => {
  it('stating something', () => {
    const result = hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('shouting', () => {
    const result = hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('asking a question', () => {
    const result = hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('talking forcefully', () => {
    const result = hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  it('using acronyms in regular speech', () => {
    const result = hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  it('forceful questions', () => {
    const result = hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting numbers', () => {
    const result = hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('only numbers', () => {
    const result = hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('question with only numbers', () => {
    const result = hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('shouting with special characters', () => {
    const result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', () => {
    const result = hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', () => {
    const result = hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', () => {
    const result = hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', () => {
    const result = hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('prolonged silence', () => {
    const result = hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });
});
