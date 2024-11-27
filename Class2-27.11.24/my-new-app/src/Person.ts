export interface Person {
    name: {
        first: string,
        last: string,
    },
    email: string,
    picture: {
        large: string,
    }
}


export type Student = {
    name: {
        first: string,
        last: string,
    },
    email: string,
    picture: {
        large: string,
    }
}

export class Employee {
    name: {
        first: string,
        last: string,
    };
    email: string;
    picture: {
        large: string;
    };
    static nameOfCompany: string

    constructor(name?: { first: string, last: string }, email?: string, picture?: { large: string }) {
        this.name = name ? name : { first: "", last: "" };
        this.email = email ? email : "";
        this.picture = picture ? picture : { large: "" }
    }

    static showInfo() {
        console.log("Employee of Bank Leumi" + Employee.nameOfCompany);


    }
}

class Athlet extends Employee {
    sport: string

    constructor(name?: { first: string, last: string }, email?: string, picture?: { large: string }, sport?: string) {
        name = name ? name : { first: "", last: "" };
        email = email ? email : "";
        picture = picture ? picture : { large: "" };
        super(name, email, picture);
        this.sport = sport ? sport : "";
    }
}

export abstract class Character {
    name: string = "";
    abstract animate(): void;
}

export abstract class Warrior extends Character {
    abstract goToTrain(): void;
}

export class Dragon extends Character {
    animate(): void {
        console.log(this.name + " is moving");
    }
}

export class NinjaWarrior extends Warrior {
    goToTrain(): void {
        console.log(this.name + " is training with nina-stars");
    }
    animate(): void {
        console.log(this.name + " is moving with nina-stars");
    }
}

export class SwordWarrior extends Warrior {
    goToTrain(): void {
        console.log(this.name + " is training with swords");
    }
    animate(): void {
        console.log(this.name + " is moving with swords");
    }
}

export class Employee3 {
    name: string
    email: string
    picture: string

    // Using distructore enables us to use name parameters
    constructor({ name, email, picture }: { name: string, email?: string, picture: string }) {
        this.email = email ? email : "";
        this.name = name;
        this.picture = picture;
    }
}