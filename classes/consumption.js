let idConsumption=1

class Consumption{
    /**
     * 
     * @param {*} creditCardId IDCARD
     * @param {*} local LOCAL
     * @param {*} monto MONTO
     */
    constructor(creditCardId, local, monto){
        this.idConsumption=idConsumption
        idConsumption++
        this.creditCardId=creditCardId
        this.fecha=new Date()
        this.local=local
        this.monto=monto
    }
}

let consumptions = [
    new Consumption(2132432654540000, "Supermercado", 50),
    new Consumption(2132432654540001, "Restaurante", 100),
    new Consumption(2132432654540002, "Cafetería", 20),
    new Consumption(2132432654540002, "Tienda de ropa", 80),
    new Consumption(2132432654540003, "Gasolinera", 30),
    new Consumption(2132432654540003, "Cine", 25)
];