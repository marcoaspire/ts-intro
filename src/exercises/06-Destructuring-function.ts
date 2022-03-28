
/*
    ===== TypeScript code =====

    Variables declared by "Var" are scoped to the immediate fuction body.
    Let- are scoped to the immediate enclosing block denoted by {}

    
*/

export interface Product{
    desc: string;
    price: number;
}

const telephone: Product = {
    desc: "Nokia 1",
    price: 150
}

const tablet: Product = {
    desc: "Ipad 5",
    price: 300
}

export function calculateTax (products: Product[]):[number,number]{
    let total=0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total,total*0.16];

}
const products =[telephone,tablet];
const [total,tax]= calculateTax(products);  
//console.log("TAX:", tax);
//console.log("Total:", total);

