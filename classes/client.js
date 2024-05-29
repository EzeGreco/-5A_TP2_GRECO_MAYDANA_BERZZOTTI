let idClient =1
class Client{
    /**
     * 
     * @param {*} dni DNI
     * @param {*} password PASS
     * @param {*} name NAME
     * @param {*} surname SURNAME
     * @param {*} descubierto DESCUBIERTO
     * @param {*} tieneCajaDolares TIENECAJADOLARES
     */
    constructor(dni, password, name, surname, descubierto,tieneCajaDolares){
        this.id=idClient;
        idClient++;
        this.dni=dni;
        this.password=password;
        this.name=name;
        this.surname=surname;
        this.cajaAhorroPesos=0;
        this.descubierto=descubierto;
        this.descubiertoUsado=0
        this.tarjetaAsociada= 2132432654544567+this.id;
        if (tieneCajaDolares==true){;
            this.cajaAhorroDolares=0;
        } else{;
            this.cajaAhorroDolares=-1;
        };
        this.fecha=new Date();
        this.fechaVencimientoTargeta= new Date(this.fecha.getFullYear()+3,this.fecha.getMonth(),this.fecha.getDate());
    }
    //ejercicio12
    extraerDinero(monto,caja){
        if (caja==="pesos"){
            if (this.cajaAhorroPesos+(this.descubierto-this.descubiertoUsado)>=monto){
                this.cajaAhorroDolares-=monto
                return true
            }else{
                return false
                }
        }else if (caja==="dolares"){
            if (this.cajaAhorroDolares>=0 && this.cajaAhorroDolares>=monto){
                this.cajaAhorroDolares-=monto
                return true
            }else{
                return false
                }
        }else{
        return false;
        };
    }

    //ejercicio13 
    ingresarDinero(monto, caja) {
            if (caja === "pesos") {
                this.cajaAhorroPesos += monto;
                return this.cajaAhorroPesos;
            } else if (caja === "dolares") {
                if (this.cajaAhorroDolares >= 0) {
                    this.cajaAhorroDolares += monto;
                    return this.cajaAhorroDolares;
                } else {
                    return -1; // No tiene caja de ahorro en dólares
                }
            } else {
                return -1; // Tipo de caja no válido
        }
    }

    //ejercicio14
    compraVentaDolares(monto, cajaOrigen) {
        let montoConvertido;
        if (cajaOrigen === "pesos") {
            montoConvertido = monto / COTIZACION_DOLAR; // Convertir pesos a dólares
            if (this.extraerDinero(monto, cajaOrigen) && this.ingresarDinero(montoConvertido, "dolares") !== -1) {
                return true;
            } else {
                return false;
            }
        } else if (cajaOrigen === "dolares") {
            montoConvertido = monto * COTIZACION_DOLAR; // Convertir dólares a pesos
            if (this.extraerDinero(monto, cajaOrigen) && this.ingresarDinero(montoConvertido, "pesos") !== -1) {
                return true
            } else {
                return false;
            }
        } else {
            return false; // Tipo de caja no válido
        }
    }
}

// Definición de clientes hardcodeados
let clients = [
    new Client(12345678, "pass1", "Juan", "García", 500, true),
    new Client(87654321, "pass2", "María", "López", 800, false),
    new Client(56789012, "pass3", "Carlos", "Martínez", 300, true),
    new Client(34567890, "pass4", "Ana", "Sánchez", 1000, false),
    new Client(90123456, "pass5", "Luis", "Rodríguez", 600, true)
];