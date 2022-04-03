function greet(greeting) {
  return function (name) {
    console.log(greeting, name);
  };
}

// here sayHi is a varable which assigning a function
const sayHi = greet("Hi");

// now lets execute the function
sayHi("Ayon");

// we can see that 'Hi Ayon' is the output in console

// so we can see some weird stuffs here
// as how come they are getting the 'hi' as it was executed and finished earlier
// its happening for the power of clousure
// lets recap how the code is runnung behind the scene
/**
 * And remember this seems unusual because the greet function ends.

And when I invoke the function that is returned,

it seems like that greet function is still hanging around somehow,

because the whattosay variable is still there.

So what's happening?

Well, when this code starts, we have our Global Execution Context.

When I hit this line sayHi = greet, it invokes the greet

function, the new execution context is created.

And that variable that's passed to it, whattosay,

is sitting in its variable environment.

It returns a new function object.

It creates a function on the fly, and returns it.

And that's it.

So after that return, the greet execution context is popped off the stack.

It's gone.

But here's a question.

We said every execution context has this space in memory,

where the variables and functions created inside of it live.

What happens to that memory space when the execution context goes away?

Well under normal circumstances, the JavaScript

engine would eventually clear it out with a process called garbage collection.

But at the moment that execution context finishes,

that memory space is still there.

It's still hanging around.

The execution context may be gone,

but it's just sitting there somewhere in memory.

All right, now we move on and we're inside the global execution context again.

And then we invoke the function that sayHi is pointing at.

It's an anonymous function,

because we didn't give our function a name when we returned it.

And then that creates a new execution context.

And I've passed the name variable, Tony.

So that will end up in its memory.

But when I hit this line, console.log.

When its code is invoked, and JavaScript engine sees

the whattosay variable, what does the JavaScript engine do?

Well it goes up the scope chain.

We've learned this.

There's an outer lexical environment reference.

In other words it goes to the next point outside where the function was created to

look for that variable, since it couldn't find it inside the function itself.

And even though the execution context of that function greet is gone,

was popped off the stack, the sayHi execution

context still has a reference

to the variables, to the memory space of its outer environment.

In other words, even though the greet function ended,

it finished, any functions created inside of it

when they are called will still have a reference to that greet function's memory.

To what was in its memory, its execution context memory space.

Think about this for a second.

Greet is gone, the execution context is gone.

But what's in memory for that execution context isn't and the JavaScript

engine makes sure that my function can still go down the scope chain and find it.

Even though it's not even on the execution stack anymore.

And this way we say that the execution context has closed in its outer variables,

the variables that it would normally have reference to anyway.

Even though those execution contexts are gone.

And so this phenomenon, of it closing in all the variables

that it's supposed to have access to, is called a closure.

Make sense?

It isn't something, then, that you create,

that you type, that you tell the JavaScript engine to do.

Closures are simply a feature of the JavaScript programming language.

They just happen.

It doesn't matter when we invoke a function.

We don't have to worry if its outer environments are still running.

The JavaScript engine will always make sure that whatever function I'm running,

that it will have access to the variables that it's supposed to have access to.

That its scope is intact.

Make sense?

This is a feature of the language that's extraordinarily important and powerful.

We rely on it a lot.

It allows us to make some really interesting coding patterns.

And understanding what's happening under the hood

helps us to understand closures aren't all that complicated.

They're just a feature to make sure that, when you run a function,

it works the way it's supposed to; that it has access to those outer variables.

It doesn't matter whether the outer functions have finished running or not.

So when you say, oh I create a closure.

Well sort of.

You'll read that sometimes, I create a closure.

The JavaScript engine creates the closure.

We're just taking advantage of it.
 */

// function factories

function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("Hello " + firstname + " " + lastname);
    }
    if (language === "es") {
      console.log("Hola " + firstname + " " + lastname);
    }
  };
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");
