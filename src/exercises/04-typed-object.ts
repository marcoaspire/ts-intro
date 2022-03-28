
/*
    ===== TypeScript code =====

    Variables declared by "Var" are scoped to the immediate fuction body.
    Let- are scoped to the immediate enclosing block denoted by {}
*/

interface SuperHero{
    name: String,
    age: Number,
    address:Address,
    showAddress:() => string
}

interface Address{
    street: String,
    country:String 
    city:String
}


const superhero:SuperHero= {
    name:"Spiderman",
    age: 30,
    address:{
        street: "Main St 10",
        country: "USA",
        city: "New Year"
    },
    showAddress (){
        return this.name + ',' + this.address.city + ','+ this.address.country;
    }
}

const address = superhero.showAddress();
console.log(address);
