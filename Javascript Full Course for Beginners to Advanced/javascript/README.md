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

## Misc
Type of:

```javascript
typeof('hello'); // String
```

Default values:

```javascript
function tip(bill, tipPercentage=0.15) {
    return bill*tipPercentage;
}
```

## Objects

Dict in python. Except keys are normal text.

```javascript
let obj = {name: 'Tieg', age: 21};
```

You can also make use of the stdlib _JSON_ class to print an object.

```javascript
let obj = {name: 'Tieg', age: 21};
JSON.stringify(obj); // {"name":"Tieg","age":21}
```

You can also make use of the stdlib _Object_ class to get the keys or values of an object.

```javascript
let obj = {name: 'Tieg', age: 21};
Object.keys(obj); // name,age
Object.values(obj); // Tieg,21
```

## Arrays

Very similar to python. Init the same way as well.

## Loops

Some javascript loops.

```javascript
let arr = ['apple', 'pear', 'jam', 'cheese'];

// for of loop
for (let n of arr) {
    console.log(n);
}

// for i loop
for (let i = 0; i < arr.length; i++) {
    console.log(`${i}) ${arr[i]}`);
}

// for each loop (n)
arr.forEach(function(n) {
    console.log(n);
});

// for each loop (n, i)
arr.forEach(function(n, i) {
    console.log(`${i}) ${n}`);
});

// while loop
let i = 0;
while (i < arr.length) {
    log(`${i}) ${arr[i]}`);
    i++;
}

// do while loop
i = 0;
do {
    log(`${i}) ${arr[i]}`);
    i++;
} while (i < arr.length);
```

We also have _break_ and _continue_, which work as expected.

## If statements

Work like any other if statements. However there are also tripple equals. Where types and value has to be equal.

```javascript
'1' == 1; // true
'1' === 1; // false
'1' != 1; // false
'1' !== 1; // true
```

## Map

A callback function that is applied to every index of an array during a transformation. The map returns a new array, not editing the original array.

```javascript
[2, 3, 7, 1].map(function(n) {
    return n*2;
}); // [4,6,14,2]
```

## Filter

A callback function that returns True or False on every item in an array. If True, the item remains in the array. If False, the item is removed from the array. The filter returns a new array, not editing the original array.

```javascript
[2, 3, 7, 1].filter(function(n, i) {
    return i > 2;
}); // [1]
```

## Reduce

A callback function that reduces an array to a numeric value. The reduce returns a new array, not editing the original array.

```javascript
[2, 3, 7, 1].reduce(function(accumulator, n) {
    return accumulator+n*2;
}); // 0 + 2, 2 + 3, 5 + 7, 12 + 1 = 13
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

## Callbacks

Call backs are functions that take function pointers and use the previously defined function inside of themself.

```javascript
let fancy = function(name) {
    consol.log(`Good morrow ${name}`);
}

let greeter = function(name, callback) {
    callback(name);
}

greeter('Tieg', fancy); // Good morrow Tieg
```

## Named Imports / Exports

All imports have to be done before any logic.

Assume a directory like this.

```
.
├── app.js
└── Math.js
```

Math.js:

```javascript
export var add = function(n1, n2) {
    return n1 + n2;
}

export var PI = 3.14;
```

Then we can import * from Math

```javascript
import * as Math from './Math.js';

console.log(`${Math.PI}`); // 3.14
```

Note: While testing the above code, I liked app.js to html, then opened the html in chrome. I got a cors error. The problem is that chrome doesn't like us loading js from the local file system. The solution was to run index.html as a live server.

We can also import specific modules from Math

```javascript
import {PI} from './Math.js';

console.log(`${PI}`); // 3.14
```

## Default exports

This is where you can export a single value. Often a class.

Assume a directory like this.

```
.
├── Animal.js
└── app.js
```

Animal.js:

```javascript
export default class Animal{
  constructor() {
    console.log("i am an animal");
  }
  getClassType() {
    return "Animal";
  }
}
```

We can import and use the Animal class like this

```javascript
import AnimalClass from './Animal.js';

let animalInstant = new AnimalClass(); // i am an animal (due to constructor)
animalInstant.getClassType(); // Animal
```

Note that _AnimalClass_ is just a reference name that can be anything.

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

# This

Similar to java. The this keyword is used to define context when refrencing a variable.

```javascript
const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  toString: function() {
    this.cars.forEach(car => {
      consol.log(`${this.name} has ${car}`);
    }.bind(this));
  }
}
```

The code above shows what happens when you go into a forEarch (for example). The this context is lost. We use the .bind(this) code to keep the context.

We can also save the context before entering the forEach. `const that = this;`.

Also arrow function mess with this a little bit.

## Classes

Simple class example

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        log(`${this.name} is eating`);
    }
}

const dog = new Animal('Guinness', 6);
dog.eat();
```

### Inheritance

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        log(`${this.name} is eating`);
    }
}

class Cat extends Animal {
    constructor(name, age, colour) {
        super(name, age) // call to the super constructor
        this.colour = colour;
    }

    logColour() {
        log(this.colour);
        super.eat(); // able to call on super class methods
    }
}

const cat = new Cat('sushi', 1, 'black');
cat.logColour();
cat.eat();
```

### Static methods

Like in java. Allow us to make calls to functions of classes, without needing an instance.

```javascript
class Person {
    constructor() {

    }

    static cough() {
        log('cough');
    }
}
Person.cough();
```