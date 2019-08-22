let randomRange = require('./function').randomRange;
let yell = require('./function').yell;

let a = process.argv[2];
let b = process.argv[3];
let str = process.argv[4];


console.log(randomRange(a,b), yell(str));