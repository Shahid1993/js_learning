# js_learning
Javascript snippets


* #### [How to clone an array in JavaScript](https://medium.freecodecamp.org/how-to-clone-an-array-in-javascript-1d3183468f6a)
	__1. Spread Operator (Shallow copy)__
	```js
	numbersCopy = [...numbers];
	```
	__2. Good Old for() Loop (Shallow copy)__  
	__3. Good Old while() Loop (Shallow copy)__  
	__4. Array.map (Shallow copy)__  
	```js
	numbersCopy = numbers.map((x) => x);
	```
	__5. Array.filter (Shallow copy)__
	```js
	numbersCopy = numbers.filter(() => true);
	```
	__6. Array.reduce (Shallow copy)__
	```js
	numbersCopy = numbers.reduce((newArray, element) => {
	  newArray.push(element);

	  return newArray;
	}, []);
	```
	__7. Array.slice (Shallow copy)__
	```js
	numbersCopy = numbers.slice();
	```
	__8. JSON.parse and JSON.stringify (Deep copy)__
	```js
	numbersCopy = JSON.parse(
	  JSON.stringify(nestedNumbers)
	);
	```
	__9. Array.concat (Shallow copy)__
	```js
	[1, 2, 3].concat(); // [1, 2, 3]
	[1, 2, 3].concat([]); // [1, 2, 3]
	```
	__10. Array.from (Shallow copy)__
	```js
	numbersCopy = Array.from(numbers)
	```







