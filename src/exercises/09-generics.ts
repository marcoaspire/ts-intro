
/*
    ===== TypeScript code =====

    execute: npm start

    generics can work over a variety of types rather than a single one.
*/

function whatTypeamI<T>(arg:T){
    return arg;
}

let string = whatTypeamI("Hello world");
let number = whatTypeamI(5);
let array = whatTypeamI([1,2,3,4]);

let explicitType = whatTypeamI<number>(100);



