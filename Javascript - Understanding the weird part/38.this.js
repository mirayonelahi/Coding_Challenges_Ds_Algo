/**
 *
 * whenever we execute a function, in js there creates a execution context.
 * in that context there is variable environment
 * there is a outer environment
 * and there is this keyword
 * this keywords points to the object that is executing the function
 *
 *
 */

function a() {
  console.log(this);
  this.newVariable = "hello";
}

console.log(newVariable);

// the upper example causing global . be careful about this

let c = {
  name: "c",
  log: function () {
    this.name = "the updated c";
    console.log(this);
  },
};

c.log();

// the upper example is calling method on object
// so we can use this key to mutate the object

// the lower example in js seems bug to some people

let isBug = {
  name: "c",
  log: function () {
    this.name = "the first updated c";
    console.log(this);

    function setName(name) {
      this.name = name;
    }

    setName("second updated c");
    console.log(this);
  },
};

//what will be value of name finally?

isBug.log();

// why the updated again not working?
// because the setName function is not in the execution context of the log function
// so the this keyword points to the global object
// so the name is not updated
// lets fix it by using bind
// bind is used to bind the this keyword to the execution context

let fixBug = {
  name: "c",
  log: function () {
    let self = this;
    self.name = "the first updated c";
    console.log(self);

    function setName(name) {
      self.name = name;
    }

    setName("second updated c");
    console.log(self);
  },
};

//what will be value of name finally?

fixBug.log();
