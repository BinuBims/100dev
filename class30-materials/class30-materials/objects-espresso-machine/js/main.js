//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(make,model,color,plugType){
        this.make = make,
        this.model = model,
        this.color = color,
        this.plugType = plugType
    }

    start(){
        console.log("espresso machine is starting")
    }

    stop(){
        console.log("espresson machine is stopping")
    }

    puase(){
        console.log("espresso machine is pausing")
    }
}

const espressMahcineOne = new EspressoMachine('phillips', '2.0', 'black', '240v')
console.log(espressMahcineOne)
