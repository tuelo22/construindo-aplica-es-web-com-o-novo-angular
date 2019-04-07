// se adicionar export apenas essa classe será exportada.
class Spacecraft{

    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entring hyperspace with ${this.propulsor}`)
    }
}

interface Containership {
    // se colocar ? e o atributo deixa de ser obrigatório a implementação
        cargoContainers: number
}

export {Spacecraft, Containership}