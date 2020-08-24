let re, re2, re3;
re = /hello/;
re2 = /hello/i; // case insensitive
re3 = /hello/g; //global

console.log(re, re2, re3);
console.log(re.source, re2.source, re3.source);

//exec() = return result in array or null
let result = re.exec("hellofkdjshfkj world hello hellodbkfb");
console.log(result);
console.log(result[0]);
result = re3.exec("hellofkdjshfkj world hello hellodbkfb");
console.log(result);
console.log(result[0]);

//test() =  true or false
result = re.test("hello world");
console.log(result);
result = re.test("Hello");
console.log(result);
result = re2.test("Hello");
console.log(result);

//match() = return result array or null
const str = "hello there hello helloihjjk";
result = str.match(re);
console.log(result);

//search() = return index of the first match else -1
result = str.search(re);
console.log(result);

//replace = return new string with some or all matches of a pattern
const newstr = str.replace(re3, " HI");
console.log(newstr);
