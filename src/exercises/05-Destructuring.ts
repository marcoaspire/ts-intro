
/*
    ===== TypeScript code =====

    Variables declared by "Var" are scoped to the immediate fuction body.
    Let- are scoped to the immediate enclosing block denoted by {}

    Destructuring
*/

interface MediaPlayer{
    volume: number;
    second: number;
    song: string;
    details: Details
}

interface Details{
    author: string;
    year: number;
}

const mediaPlayer: MediaPlayer={
    volume:90,
    second:30,
    song:"Hello World",
    details:{
        author:"JAYZ",
        year: 2000
    }
}

//const {volume, second, song, details:{author: authorDetails}} = mediaPlayer; 
const {volume:vol, second:sec, song, details} = mediaPlayer; 
const {author} = details; 


// console.log("Current volume:"+vol);
// console.log("Current second:"+second);
// console.log("Current song:"+song);
// console.log("Author:"+ author);

const dbz: string[] = ["Goku", "Vegeta","Gohan"];
const [ first,,third] = dbz;
console.log("Character 1",first );
console.log("Character 3", third);


