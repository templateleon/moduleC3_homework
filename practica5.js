class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    togglePower() {
        this.isPlugged = !this.isPlugged;
        console.log(`${this.name} is now ${this.isPlugged ? "on" : "off"}.`);
    }
}

const homePC = new ElectricalAppliance("Home PC", 200);
const tableLamp = new ElectricalAppliance("Table Lamp", 50);


homePC.togglePower(); // "Home PC is now on."
tableLamp.togglePower(); // "Table Lamp is now on."
homePC.togglePower(); // "Home PC is now off."
tableLamp.togglePower(); // "Table Lamp is now off."


console.log(homePC);
console.log(tableLamp);










