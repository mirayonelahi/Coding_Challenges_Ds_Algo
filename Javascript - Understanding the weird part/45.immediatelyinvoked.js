//dont need to call the function otherwise it call by itself
//used a lot in any js frameworks
// executed itself just sitting in memory
// safe code
// annonymous function created and sit in memory
// not mismatching with other variable.. just have its own context
// so we use lots of dependenceies and libraries . why its not conflict the varable?
// beacause of using iif. as it is safe and creates its own context
// separate execution context/ separate memory
// no crashing -- wraps all code in iif
// we can use and overwrite global objects using iif
//
//

(function (name) {
  console.log("hey " + name);
})("ayon");
