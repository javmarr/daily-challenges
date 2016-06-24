const prompt = require('prompt');

// Leap
// Write a program that will take a year and report if it is a leap year.
// ​
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
// ​
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
// ​
// For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
// year, but 2000 is.
// ​
// If your language provides a method in the standard library that does
// this look-up, pretend it doesn't exist and implement it yourself.
// ​
// ​
// ## How to Submit
// 1. Create a daily-challenges github.com repo
// 2. Create a leap.js file in the repo.
// 3. Add a comment to this snippet (on Slack) with a link to your file.

// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

var isLeap = false;
prompt.start();
prompt.get(['year'], (err, result) => {

  // % num to see if the yeah is perfectly divisible
  if(result.year % 4 == 0)
  {
    isLeap = true;
  }
  if(result.year % 100 == 0)
  {
    if(result.year % 400 == 0)
    {
      isLeap = true;
    }
    else {
      //not leap year
      isLeap = false;
    }
  }
  else {
    //not leap year
    isLeap = false;
  }

  if(isLeap)
  {
    console.log("The year:" + result.year + " is a leap year.");
  }
  else {
    console.log("The year:" + result.year + " is not a leap year.");
  }
  return isLeap;
});
