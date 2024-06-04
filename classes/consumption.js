let idConsumption=1

class Consumption{
    /**
     * 
     * @param {*} creditCardId IDCARD
     * @param {*} local LOCAL
     * @param {*} monto MONTO
     */
    constructor(creditCardId, local, monto){
        this.id=idConsumption
        idConsumption++
        this.idCreditCard=creditCardId
        this.fecha=new Date()
        this.local=local
        this.monto=monto
    }
}

let consumptions = [
    new Consumption(1, "Supermercado", 50),
    new Consumption(1, "Restaurante", 60),
    new Consumption(2, "Restaurante", 100),
    new Consumption(2, "Cafetería", 20),
    new Consumption(2, "Supermercado", 45),
    new Consumption(3, "Tienda de ropa", 80),
    new Consumption(3, "Gasolinera", 55),
    new Consumption(4, "Gasolinera", 30),
    new Consumption(4, "Cine", 40),
    new Consumption(5, "Cine Adulto", 4700),
    new Consumption(6, "Farmacia", 40),
    new Consumption(6, "Supermercado", 30),
    new Consumption(7, "Librería", 15),
    new Consumption(7, "Restaurante", 25),
    new Consumption(8, "Teatro", 70),
    new Consumption(8, "Cine", 50),
];