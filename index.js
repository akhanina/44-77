// 45
// let elems = document.querySelectorAll('p');
// console.log(elems[0].textContent);
// console.log(elems.length);
// elems.forEach(function(elem) {
//   console.log(elem.textContent);
// });

// 46
// let startIndex = 1;
// let endIndex = 3; 
// let elementsSlice = [];

// for (let i = startIndex; i <= endIndex; i++) {
//   if (elems[i]) {
//     elementsSlice.push(elems[i]);
//   }
// }

// console.log(elementsSlice); 

// 47
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
//   ];
  
//   for (let i = 0; i < test.length; i++) {
//     let element = test[i];
//     let isArray = Array.isArray(element);
//     console.log(`Элемент ${i} является массивом: ${isArray}`);
//   }

//   48

//   let elems = document.querySelectorAll('p');
// let arr = [];

// for (let i = 0; i < elems.length; i++) {
//   arr.push(elems[i]);
// }


// let elems = document.querySelectorAll('p');
// let arr = [...elems];


// let elems = document.querySelectorAll('p');
// let arr = Array.from(elems);



// let elems = document.querySelectorAll('p');
// let middleParagraphs = [];

// for (let i = 1; i < elems.length - 1; i++) {
//   middleParagraphs.push(elems[i]);
// }


// 49
// let elems = document.querySelectorAll('p');
// console.log(elems); // NodeList


// let node = document.getElementById('myElement');
// let childNodes = node.childNodes;
// console.log(childNodes); // NodeList


// let node = document.getElementById('myElement');
// let children = node.children;
// console.log(children); // HTMLCollection или NodeList


// 50
// let parent = document.querySelector('div');
// let elems1 = document.getElementsByTagName('p'); // HTMLCollection
// let elems2 = document.querySelectorAll('p');     // NodeList

// let p = document.createElement('p');
// p.textContent = 'New paragraph';
// parent.appendChild(p);

// console.log(elems1.length); 
// console.log(elems2.length); 

// console.log(parent.children.length);


// let parent = document.querySelector('div');
// let elems1 = document.getElementsByTagName('p'); // HTMLCollection
// let elems2 = document.querySelectorAll('p');     // NodeList

// let p = document.createElement('p');
// p.textContent = 'New paragraph';
// parent.appendChild(p);

// console.log(elems1.length); 
// console.log(elems2.length); 
// console.log(parent.childNodes.length); 



// 51
// let sym1 = Symbol();
// let sym2 = Symbol();
// let sym3 = Symbol();

// console.log(sym1, sym2, sym3);


// 52
// let sym1 = Symbol('описание символа 1');
// let sym2 = Symbol('описание символа 2');
// let sym3 = Symbol('описание символа 3');

// console.log(sym1, sym2, sym3);


// 53
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// console.log(obj);


// 54
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';

// for (let key in obj) {
//   console.log(obj[key]); 
// }


// 55
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();

// obj[sym] = function() {
//   console.log(new Date()); 
// };


// obj[sym]();


// 56
// let arr = [1, 2, 3];
// let sym = Symbol();

// arr[sym] = function() {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   return sum;
// };

// // Вызываем функцию 
// let sum = arr[sym]();
// console.log(sum); 


// // Добавляем несколько элементов в массив
// arr.push(4, 5, 6);

// // Вызываем функцию 
// sum = arr[sym]();
// console.log(sum); 


// 57

// let sumSymbol = Symbol.for('sum');

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {d: 4, e: 5, f: 6};
// let obj3 = {g: 7, h: 8, i: 9};

// obj1[sumSymbol] = function() {
//   let sum = 0;
//   for (let key in this) {
//     sum += this[key];
//   }
//   return sum;
// };

// obj2[sumSymbol] = function() {
//   let sum = 0;
//   for (let key in this) {
//     sum += this[key];
//   }
//   return sum;
// };

// obj3[sumSymbol] = function() {
//   let sum = 0;
//   for (let key in this) {
//     sum += this[key];
//   }
//   return sum;
// };

// console.log(obj1[sumSymbol]());
// console.log(obj2[sumSymbol]());
// console.log(obj3[sumSymbol]());


// 58
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);

// console.log(key1); 
// console.log(key2);

// 59
// let arr = [1, 2, 3];
// let hasIterator = typeof arr[Symbol.iterator] === 'function';
// console.log(hasIterator);


// let map = new Map();
// let hasIterator = typeof map[Symbol.iterator] === 'function';
// console.log(hasIterator);


// let set = new Set();
// let hasIterator = typeof set[Symbol.iterator] === 'function';
// console.log(hasIterator); 


// 60
// let str = 'Hello, World!';
// for (let char of str) {
//   console.log(char);
// }


// let obj = {a: 1, b: 2, c: 3};
// obj.forEach(function(value, key) {
//   console.log(key + ': ' + value);
// });


// let it = {};
// it[Symbol.iterator] = function() {
//   return this;
// };
// it.next = function() {
//   return {value: 1, done: false};
// };
// for (let val of it) {
//   console.log(val);
// }


// 61
// let arr = [1, 2, 3];
// let hasIterator = typeof arr[Symbol.iterator] === 'function';
// console.log(hasIterator); // Выведет true


// let map = new Map();
// let hasIterator = typeof map[Symbol.iterator] === 'function';
// console.log(hasIterator); // Выведет true


// let set = new Set();
// let hasIterator = typeof set[Symbol.iterator] === 'function';
// console.log(hasIterator); // Выведет true


// 62
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map[Symbol.iterator]();

// while (true) {
//   let next = iter.next();
//   if (next.done) {
//     break;
//   }
//   console.log(next.value); // Выводит пары ключ-значение
// }


// let nodes = document.querySelectorAll('div');
// let iter = nodes[Symbol.iterator]();

// while (true) {
//   let next = iter.next();
//   if (next.done) {
//     break;
//   }
//   console.log(next.value); // Выводит элементы NodeList
// }


// let elements = document.getElementsByTagName('div');
// let iter = elements[Symbol.iterator]();

// while (true) {
//   let next = iter.next();
//   if (next.done) {
//     break;
//   }
//   console.log(next.value); // Выводит элементы HTMLCollection
// }

// 63
// function  * descendingGenerator() {
//     for (let i = 5; i >= 1; i--) {
//       yield i;
//     }
//   }
  
//   let iter = descendingGenerator();
  
//   console.log(iter.next()); // {value: 5, done: false}
//   console.log(iter.next()); // {value: 4, done: false}
//   console.log(iter.next()); // {value: 3, done: false}
//   console.log(iter.next()); // {value: 2, done: false}
//   console.log(iter.next()); // {value: 1, done: false}
//   console.log(iter.next()); // {value: undefined, done: true}

  
//   64
//   function  * descendingGenerator(start) {
//     for (let i = start; i >= 1; i--) {
//       yield i;
//     }
//   }
  
//   let iter = descendingGenerator(10);
  
//   console.log(iter.next()); 
//   console.log(iter.next());
//   console.log(iter.next()); // {value: 8, done: false}
//   // ... и так далее до {value: 1, done: false}
//   console.log(iter.next()); // {value: undefined, done: true}


//   function  * decrementByOne(number) {
//     while (number > 0) {
//       yield number;
//       number--;
//     }
//   }
  
//   let iter = decrementByOne(10);
  
//   console.log(iter.next()); // {value: 10, done: false}
//   console.log(iter.next()); // {value: 9, done: false}
//   console.log(iter.next()); // {value: 8, done: false}
//   // ... и так далее до {value: 1, done: false}
//   console.log(iter.next()); // {value: undefined, done: true}

  
//   function  * halveNumber(number) {
//     while (number >= 1) {
//       yield number;
//       number /= 2;
//     }
//   }
  
//   let iter = halveNumber(10);
  
//   console.log(iter.next()); // {value: 10, done: false}
//   console.log(iter.next()); // {value: 5, done: false}
//   console.log(iter.next()); // {value: 2.5, done: false}
//   // ... и так далее до {value: 0.125, done: false}
//   console.log(iter.next()); // {value: undefined, done: true}

  
//   function  * nextPowerOfTwo() {
//     let power = 1;
//     while (true) {
//       yield power;
//       power  * = 2;
//     }
//   }
  
//   let iter = nextPowerOfTwo();
  
//   console.log(iter.next()); // {value: 1, done: false}
//   console.log(iter.next()); // {value: 2, done: false}
//   console.log(iter.next()); // {value: 4, done: false}
//   // ... и так далее до {value: 2^32, done: false}
//   console.log(iter.next()); // {value: 2^33, done: false}


//   function  * nextFibonacciNumber() {
//     let a = 0, b = 1;
//     while (true) {
//       [a, b] = [b, a + b];
//       yield b;
//     }
//   }
  
//   let iter = nextFibonacciNumber();
  
//   console.log(iter.next()); // {value: 1, done: false}
//   console.log(iter.next()); // {value: 1, done: false}
//   console.log(iter.next()); // {value: 2, done: false}
//   // ... и так далее до {value: n, done: false}
//   console.log(iter.next()); // {value: n+1, done: false}

  
//   66
//   function  * func(obj) {
//     for (let key of Object.keys(obj)) {
//       yield [key, obj[key]];
//     }
//   }
  
//   let iter = func({a: 1, b: 2, c: 3});
  
//   for (let elem of iter) {
//     console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
//   }

//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   obj[Symbol.iterator] = function *  () {
//     for (let key in this) {
//       yield {key: key, val: this[key]};
//     }
//   };
  
//   for (let elem of obj) {
//     console.log(elem); // {key: 'a', val: 1}, {key: 'b', val: 2}, {key: 'c', val: 3}
//   }

  
//   68
//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function  * () {
//       for (let key in this) {
//         yield {key: key, val: this[key]};
//       }
//     }
//   };
  
//   for (let elem of obj) {
//     console.log(elem); // {key: 'a', val: 1}, {key: 'b', val: 2}, {key: 'c', val: 3}
//   }

  
// 69
// let arr = [1, 2, 3];
// let iter = arr.values();
// for (let elem of iter) {
//   console.log(elem); // 1, 2, 3
// }



// let set = new Set([1, 2, 3]);
// let iter = set.values();
// for (let elem of iter) {
//   console.log(elem); // 1, 2, 3
// }


// 70
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map.keys();
// for (let key of iter) {
//   console.log(key); // a, b, c
// }


// let set = new Set([1, 2, 3]);
// let iter = set.keys();
// for (let key of iter) {
//   console.log(key); // 1, 2, 3
// }



// 71
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map.entries();
// for (let entry of iter) {
//   console.log(entry); // [['a', 1], ['b', 2], ['c', 3]]
// }


// let set = new Set([1, 2, 3]);
// let iter = set.entries();
// for (let entry of iter) {
//   console.log(entry); // [1, 1], [2, 2], [3, 3]
// }


// let nodes = document.querySelectorAll('div');
// let iter = nodes.entries();
// for (let entry of iter) {
//   console.log(entry); // [0, div], [1, div], [2, div] и т.д.
// }


// 72
// В коллекции Set по умолчанию действует итератор values. 

// 73
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function  * (){
//       for (let key in this){
//         yield this[key];
//       }
//     }
//   };
  
//   let arr = [...obj]; 
//   console.log(arr); 
  
  
//   74
//   let str = '12345';
// let sum = 0;

// for (let digit of str) {
//   sum += parseInt(digit, 10); 
// }

// console.log(sum); 


// 75
// let num = 12345;
// let sum = 0;

// for (let digit of String(num)) {
//   sum += parseInt(digit, 10); 
// }

// console.log(sum); 


// 76
// let cells = document.querySelectorAll('table tr td');

// for (let [num, cell] of cells.entries()) {
//   cell.textContent += ' ' + (num + 1);
// }

// 77
// let inputs = document.querySelectorAll('input');

// for (let [key, {id, value}] of inputs.entries()) {
//   console.log(key, id, value);
// }
