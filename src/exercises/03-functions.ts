
/*
    ===== TypeScript code =====

    Variables declared by "Var" are scoped to the immediate fuction body.
    Let- are scoped to the immediate enclosing block denoted by {}
*/

function addNumbers(a:number,b:number):number{
    return (a+b);
}

const addNumbers2= (a:number,b:number):number => (a+b);

function multiplyBy2(number:number,number2?:number, base:number=2):number{
    return number*base;
}

// const res=addNumbers(15,5);
// const res2=multiplyBy2(2,10);
// console.log(res2);

interface Character2{
    name:String;
    hp: number;    
    showHP: () => void;
}

function heal( character:Character2, healX:number):void{
    character.hp += healX;
    console.log(character);
    
} 

const newCharacter: Character2={
    name: "Marco",
    hp:50,
    showHP(){
        console.log("Health points: ", this.hp);
    }
}

heal(newCharacter,10);
newCharacter.showHP();