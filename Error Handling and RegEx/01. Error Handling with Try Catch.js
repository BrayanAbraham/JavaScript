try {
  //ReferenceError
  myFunction();
} catch (e) {
  console.log(e);
}

try {
  //TypeError
  null.myFunction();
} catch (e) {
  console.log(`${e.name}: Custom message`);
} finally {
  console.log("Will run in any case");
}

try {
  //SyntaxError
  eval("Hello World");
} catch (e) {
  console.log(e);
}

try {
  //URIError
  decodeURIComponent("%");
} catch (e) {
  console.log(e);
}

const user = {};
try {
  if (!user.name) {
    throw new SyntaxError("USer has no name");
  }
} catch (e) {
  console.log(e);
}
