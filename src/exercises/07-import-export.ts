
/*
    ===== TypeScript code =====

    Variables declared by "Var" are scoped to the immediate fuction body.
    Let- are scoped to the immediate enclosing block denoted by {}

import { Product,calculateTax } from "./exercises/06-Destructuring-function";
    
*/

import { Product,calculateTax } from "./06-Destructuring-function";
const shoppingCart: Product[] = [
    {
        desc:"Tel 1",
        price:100
    },
    {
        desc:"Tel 2",
        price:200
    },    
];

const [total,tax]= calculateTax(shoppingCart);  

console.log("TAX:", tax);
console.log("Total:", total);

