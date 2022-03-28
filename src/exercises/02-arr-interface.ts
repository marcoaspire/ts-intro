
/*
    ===== TypeScript code =====

    Variables declared by "Var" are scoped to the immediate fuction body.
    Let- are scoped to the immediate enclosing block denoted by {}
*/

//let abilities: (boolean| string|number)[] = [ "Bash", "Counter","Healing",100];
let abilities: string[] = [ "Bash", "Counter","Healing"];
abilities.push("other");

interface Character{
    name: string,
    hp: number,
    abilities: String[],
    hometowns?: string //optional
}

const character: Character ={
    name: "Mario",
    hp:100,
    abilities: [ "Bash", "Counter","Healing"]
}
character.hometowns="Animal village";

console.table(character);