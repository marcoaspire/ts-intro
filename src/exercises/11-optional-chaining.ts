
/*
    ===== TypeScript code =====

    execute: npm start
    optional chaining
*/

interface Passenger{

    name: string;
    children?: string[]  //optional

}
   
const passenger1:Passenger ={
    name:"Mark"
}


const passenger2:Passenger ={
    name:"John",
    children: ["Alex","Julia"]
}

function showChilren(passenger:Passenger):void{
    //return 0 if passenger doesnt have children
    const childrenCount=passenger.children?.length || 0;
    console.log(childrenCount);
    
}

showChilren(passenger1);