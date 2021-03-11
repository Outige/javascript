# Javascript Course

![idea  (2)](https://user-images.githubusercontent.com/40702606/76909562-6d3e9f80-68a3-11ea-8217-ba49ac27cd14.png)

## Installation

1. [Install node] (https://nodejs.org/en/)
3. npm install
4. npm run devserver
5. Enjoy

## Resources

[javascript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

# My learning

## Template Literals

This is similar to the f'' syntax in python. It allows us to format variables into strings.  The sintax like this:

```javascript
let name = 'Sarah';
let age = 27;
let literal = `Name ${name}, Age ${age}`;
consol.log(literal);
-----
Name Sarah, Age 27
```

## Let & Var

Both are keywords that init variables. var leads to variable scope that can be undesiarable. Example.

```javascript
for (var i = 0; i < 10; i++) {

}
consol.log(i);
-----
10
```

With var, i maintains variable scope after the for loop, which might be undesiarable. The use of let would lead to an error here, because i won't be defined after the for loop

## Spread Operator

This allows us to copy the values of an array. Not just the reference.

```javascript
let a = [0, 1, 2, 3];
let b = [4, 5, 6, 7];

let c = [...a]; // [0, 1, 2, 3]
let d = [...a, ...b]; // [0, 1, 2, 3, 4, 5, 6, 7]
```

You can also spread a string into a char array.

```javascript
let s = 'hello';
let arr = [...s]; // ['h', 'e', 'l', 'l', 'o']
```

You can also spread your array as input to a function.

```javascript
function foo(a, b) {
    return a + b;
}

let arr = [1, 2];

foo(...arr);
```

You can also spread objects.

```javascript
let pet = {
    type: 'cat';
}
let ball = {
    colour: 'red';
}
let obj = [...pet, ...ball];
```

## Arrow Functions

This is a shorthand for writing functions.

```javascript
// original function
const add = function(a, b) {
    return a+b;
}
.
.
// can be shortened to
const add = (a, b) => {
    return a+b;
}
.
.
// can be shortened to
const add = (a, b) => a+b;
```

If we only had 1 argument, the function could be even shorter.