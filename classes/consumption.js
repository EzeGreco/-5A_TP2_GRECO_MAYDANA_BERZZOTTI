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
    new Consumption(2, "Restaurante", 100),
    new Consumption(2, "Cafetería", 20),
    new Consumption(3, "Tienda de ropa", 80),
    new Consumption(4, "Gasolinera", 30),
    new Consumption(5, "Cine", 25)
];