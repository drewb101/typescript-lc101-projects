import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum: number = 0;

        for(let i=0; i < items.length; i++) {
            sum += items[i].massKg;
        }

        return sum;
    };

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };

    candAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true
        }
        else {
            return false
        }
    };

    addCargo(cargo: Cargo): boolean {
        if(this.candAdd(cargo)){
            this.cargoItems.push(cargo);
            return true
        }
        else{
            return false
        }
    };

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.candAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true
        }
        else{
            return false
        }
    };
}