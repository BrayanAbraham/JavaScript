let re;

// []-character sets
re = /gr[ae]y/i; // Must be a or e - gray or grey
re = /[GF]ray/; //Must be G or F
re = /[^GF]ray/; //Match anything except G or F
re = /[A-Z]ray/; //Match any character from A to Z (Uppercase)
re = /[a-z]ray/; //Match any character from a to z (Lowercase)
re = /[A-za-z]ray/; //Match any case alphabet
re = /[0-9]ray/; //Match any digit from 0-9

//{}-quantifiers
re = /Hel{2}o/i; //checks for 2 l
re = /Hel{2,4}o/i; // checks for 2-4 l like hello, helllo or hellllo
re = /Hel{2,}o/i; // checks for atleast 2 l

//()-Grouping
re = /([0-9]x){3}/; // looks for three times number followed by x

const str = "Helllo";
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not matches ${re.source}`);
  }
}

reTest(re, str);
