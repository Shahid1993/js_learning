# js_learning
Javascript snippets


#### [How to clone an array in JavaScript](https://medium.freecodecamp.org/how-to-clone-an-array-in-javascript-1d3183468f6a)
1. Spread Operator (Shallow copy)
```js
numbersCopy = [...numbers];
```
2. Good Old for() Loop (Shallow copy)
3. Good Old while() Loop (Shallow copy)
4. Array.map (Shallow copy)
```js
numbersCopy = numbers.map((x) => x);
```
5. Array.filter (Shallow copy)
```js
numbersCopy = numbers.filter(() => true);
```
6. Array.reduce (Shallow copy)
```js
numbersCopy = numbers.reduce((newArray, element) => {
  newArray.push(element);

  return newArray;
}, []);
```
7. Array.slice (Shallow copy)
```js
numbersCopy = numbers.slice();
```
8. JSON.parse and JSON.stringify (Deep copy)
```js
numbersCopy = JSON.parse(
  JSON.stringify(nestedNumbers)
);
```
9. Array.concat (Shallow copy)
```js
[1, 2, 3].concat(); // [1, 2, 3]
[1, 2, 3].concat([]); // [1, 2, 3]
```
10. Array.from (Shallow copy)
```js
numbersCopy = Array.from(numbers)
```
