/**
 *
 * JavaScript coding test: there are two strings, and compare them.
 *  If they both have some characters even different orders, you should return 'true'.('abc' and 'acd' are equal).
 *  otherwise, return 'false'.
 */

const compareString = (str1, str2) => {
  //from one string we add in obj
  // from other str we delete from obj
  // if obj empty then true or false
  if (str1.length !== str2.length) return false;

  let mapString = {};

  for (let i of str1) {
    mapString[i] = mapString[i] + 1 || 1;
  }

  for (let i of str2) {
    if (mapString[i] !== undefined) {
      delete mapString[i];
    }
  }
  console.log(mapString);

  return Object.keys(mapString).length === 0 ? true : false;
};

const s1 = "khjgdfsa";
const s2 = "asdfghjk";

console.log(compareString(s1, s2));
