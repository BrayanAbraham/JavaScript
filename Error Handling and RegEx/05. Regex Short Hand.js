let re;

re = /\w/; // alpha numeric charaacter A-Z,a-z,0-9,_
re = /\w+/; //+- one or more
re = /\W/; // opposite of \w
re = /\d/; //digit
re = /\d+/; // one or more digits
re = /\D/; //Non digit
re = /\s/; //whitespace
re = /\S/; //Non white space
re = /Hell\b/; //word Boundary
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if not followed by y
re = /\d*/;

const str = "";
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
