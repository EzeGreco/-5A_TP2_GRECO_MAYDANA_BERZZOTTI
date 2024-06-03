let idCreditCards = 1
class CreditCard{
    /**
     * 
     * @param {*} idClient CLIENTID
     * @param {*} provider PROVIDER
     * @param {*} interes INTERES
     */
    constructor(idClient,provider,interes){
        this.id=idCreditCards;
        idCreditCards++;
        this.idClient=idClient;
        this.type="credit";
        this.provider=provider;
        this.fecha=new Date();
        this.fechaVencimiento= new Date(this.fecha.getFullYear()+3,this.fecha.getMonth(),this.fecha.getDate());
        this.saldo=0;
        this.interes=interes;
    }
    
    //ejercicio 16, registrar pago de saldo FUNCIONA
    pay(monto){
        if (monto<=0 || this.saldo <= 0){
            return -1
        } else if (monto>=this.saldo && (clients[posCliente].cajaAhorroPesos + clients[posCliente].descubierto)>=monto){
            clients[posCliente].extraerDinero(this.saldo,"pesos")
            this.saldo=0
            return 1
        }else if (monto>=this.saldo*0.1 && (clients[posCliente].cajaAhorroPesos + clients[posCliente].descubierto)>=monto){
            clients[posCliente].extraerDinero(monto,"pesos")
            this.saldo-=monto
            return 0
        }else {
            return -1
        }
    }
}
let creditCards = [
    new CreditCard(1, "Visa", 15),
    new CreditCard(1, "Mastercard", 18),
    new CreditCard(2, "American Express", 20),
    new CreditCard(2, "Visa", 16),
    new CreditCard(3, "American Express", 20),
    new CreditCard(4, "Visa", 16),
    new CreditCard(5, "Mastercard", 17),
    new CreditCard(5, "La nación+", 57)
];