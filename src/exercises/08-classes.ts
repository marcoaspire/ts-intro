class NormalPerson{
    constructor(
        public name: string,
        public address: string
    ){}
}

class Heroe extends NormalPerson{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName,"New York, USA");
    }
}

const ironman= new Heroe("Ironman",45,"Tony Stark");
console.log(ironman);
