# All type of coding challenges

Swap object keys and values
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// here we can think how to iterate over an object
// one of way is use for of and using Object.entries()
// i came up with a naive idea where i will swap key and value and delete the previous key and value

```js
for (let [key, value] of Object.entries(obj1)) {
  obj1[value] = key;
  delete obj1[key];
}
```

// But there is a better solution by using array reduce
// we manipulate the object and also spread the object

```js
const newObj = Object.entries(obj1).reduce((acc, [key, val]) => {
  return { ...acc, [val]: key };
}, {});
```
