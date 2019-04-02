### Link  
[How to use partial application to improve your JavaScript code](https://medium.freecodecamp.org/how-to-use-partial-application-to-improve-your-javascript-code-5af9ad877833)

## What is it?

Partial application starts with a function. We take this function and create a new one with 
one or more of its arguments already “set” or _partially applied_. This sounds odd, but it will 
reduce the number of parameters needed for our functions.

```javascript
const list = (lastJoin, ...items) => {
  const commaSeparated = items.slice(0,-1).join(", ");
  const lastItem = items.pop();
  return `${commaSeparated} ${lastJoin} ${lastItem}`;
}
```  


```javascript
list("and", "red", "green", "blue");     // "red, green and blue"
list("with", "red", "green", "blue");    // "red, green with blue"
list("or", "red", "green", "blue");      // "red, green or blue"
```

## How to use partial application

```javascript
const partial = (fn, firstArg) => {
  return (...lastArgs) => {
    return fn(firstArg, ...lastArgs);
  }
}
```

```javascript
const listAnd = partial(list, "and");
const listOr = partial(list, "or")

listAnd("red", "green", "blue");     // "red, green and blue"
listOr("red", "green", "blue");      // "red, green or blue"
```

## Taking it further

The partial function we created is to illustrate how partial application works. 
There are some great functional JavaScript libraries available which have this utility built in, 
such as [Ramda JS](https://ramdajs.com/docs/#partial).
