let idCreditCards = 1
class CreditCards{
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
}
let creditCards = [
    new CreditCards(1, "Visa", 15),
    new CreditCards(1, "Mastercard", 18),
    new CreditCards(2, "American Express", 20),
    new CreditCards(2, "Visa", 16),
    new CreditCards(3, "American Express", 20),
    new CreditCards(4, "Visa", 16),
    new CreditCards(5, "Mastercard", 17),
    new CreditCards(5, "La nación+", 57)
];