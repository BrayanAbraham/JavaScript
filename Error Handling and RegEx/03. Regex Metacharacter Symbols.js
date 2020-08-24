let re;

re = /hello/;
re = /hello/i;

re = /^h/i; //Must start with
re = /d$/i; //Must end with
re = /^hello$/; //Must start and end with
re = /^h.llo$/; //Match any (1) character in . position
re = /h*llo/i; //Match any number of characters in * position
re = /gre?a?y/i; // optional character grey or gray or greay or gry
re = /grey\?/; // escape character for ?

const str = "grey?";
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
