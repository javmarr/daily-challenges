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

	var output = '';

	// Whoa, chill out! for yelling
	// more than two caps together and no lower case in the string is yelling
	if(string.search(/[A-Z][A-Z]/) != -1 && string.search(/[a-z]/) == -1) {

		output = `Whoa, chill out!`;
	}

	// Sure to a question
	// (only if last char is '?')
	else if(string[string.length-1] == '?') {
		output = `Sure.`;
	}
	// Fine. Be that way! is you don't say anything
	else if(string.trim().length == 0) {
		output = `Fine. Be that way!`;
	}
	// Whatever. to anything else
	else {
		output = `Whatever.`;
	}

	return output;
}
