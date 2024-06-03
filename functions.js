const COTIZACION_DOLAR=100000//dolar massita
var clientId = 1
var posCliente=encontrarClientePorID(clientId)
changeScreen()
clients[0].cajaAhorroPesos = 10000000
clients[0].cajaAhorroDolares = 10
cargarDropdowns();

//
refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)

//ejercicio7
function encontrarClientePorID(id) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}

//ejercicio8 FUNCIONA
function encontrarCreditCardPorID(id) {
    for (let i = 0; i < creditCards.length; i++) {
        if (creditCards[i].id === id) {
            return i; // Devuelve la posición de la tarjeta en el vector
        }
    }
    return -1; // Si no se encuentra la tarjeta, devuelve -1
}

//ejercicio9 FUNCIONA
function encontrarConsumptionPorID(id) {
    for (let i = 0; i < consumptions.length; i++) {
        if (consumptions[i].id === id) {
            return i; // Devuelve la posición del consumo en el vector
        }
    }
    return -1; // Si no se encuentra el consumo, devuelve -1
}

//ejercicio10 FUNCIONA
function encontrarTarjetasPorIDCliente(idCliente) {
    let tarjetasCliente = [];
    for (let i = 0; i < creditCards.length; i++) {
        if (creditCards[i].idClient === idCliente) {
            tarjetasCliente.push(creditCards[i]);
        }
    }
    return tarjetasCliente;
}

//ejercicio11 FUNCIONA
function encontrarConsumosPorTarjeta(idTarjeta) {
    let consumosTarjeta = [];
    for (let i = 0; i < consumptions.length; i++) {
        if (consumptions[i].idCreditCard === idTarjeta) {
            consumosTarjeta.push(creditCards[i]);
        }
    }
    return consumosTarjeta;
}

//ejercicio21 Linkear métodos CompraVenta FUNCIONA
function linkCompraVenta(){
    monto=getMontoCompraVenta()
    cajaOrigen=getMonedaCompraVenta()
    if (clients[posCliente].compraVentaDolares(monto, cajaOrigen)){
        mensaje="Se ha realizado la transacción con exito"
    } else{
        mensaje="La transacción ha fallado, chequea tu saldo y la caja de ahorro seleccionados"
    }
    putMensajeCompraVenta(mensaje)
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)
}

//ejercicio21 Linkear métodos Extracción FUNCIONA
function linkRetiro(){
    monto=getMontoRetiroIngreso()
    moneda=getMonedaRetiroIngreso()
    if (clients[posCliente].extraerDinero(monto,moneda)){
        mensaje="Extracción realizada"
    }else{
        mensaje="Extracción fallida"
    }
    putMensajeRetiroIngreso(mensaje)
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)

}

//ejercicio21 Linkear métodos Ingreso FUNCIONA
function linkIngreso(){
    monto=getMontoRetiroIngreso()
    moneda=getMonedaRetiroIngreso()
    if (clients[posCliente].ingresarDinero(monto,moneda)>=0){
        mensaje="Ingreso realizado"
    }else{
        mensaje="Ingreso fallido"
    }
    putMensajeRetiroIngreso(mensaje) 
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)
}

//ejercicio 18, función login FUNCIONA
function login(dni, password){
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].dni == dni && clients[i].password==password) {
            return clients[i].id; // Devuelve la posición del cliente en el vector
        }
    }
    return -1
}

//ejercicio 18, linkear métodos de login FUNCIONA
function linkLogin(){
    dni=getDniUser()
    password=getPasswordUser()
    clientId=login(dni, password)
    if (clientId>=0){
        posCliente=encontrarClientePorID(clientId)
        changeScreen()
        cargarDropdowns();
        window.alert("Usuario logeado")
    }else{
        window.alert("Ha ocurrido un error, intentalo de nuevo")
    }
}

//ejercicio 19, función registro FUNCIONA
function register(dni, password, nameUser, surname, ingresosAnuales){
    if(dni<1000000){
        return -1
    }else if(password.length<5){
        return -2
    }else if(nameUser.length<3){
        return -3
    }else if(surname.length<3){
        return -4
    }else if(ingresosAnuales<100000){ //política bancaria-> mínimo 100000 anual
        return -5
    }else{
        clients.push(new Client(dni, password, nameUser, surname, ingresosAnuales))
        return idClient-1
    }
}

//ejercicio 19, linkear métodos de registro FUNCIONA
function linkRegister(){
    dni=getDniUser()
    password=getPasswordUser()
    nameUser=getNameUser()
    surname=getSurnameUser()
    ingresosAnuales=getIngresosAnualesUser()
    clientId=register(dni, password, nameUser, surname, ingresosAnuales)
    if (clientId>0){
        posCliente=encontrarClientePorID(clientId)
        changeScreen()
        cargarDropdowns();
        window.alert("Usuario creado y logeado")
    }else if(clientId==-1){
        window.alert("DNI inválido")
    }else if(clientId==-2){
        window.alert("Contraseña muy corta")
    }else if(clientId==-3){
        window.alert("Nombre muy corto")
    }else if(clientId==-4){
        window.alert("Apellido muy corto")
    }else if(clientId==-5){
        window.alert("solo admitimos clientes con más de 100000 pesos de ganancias anuales POBRE")
    }
}

//ejercicio 20, función de logout FUNCIONA
function logout(){
    clientId = -1
    posCliente= -1
    changeScreen()
    window.alert("Ha cerrado su cuenta con éxito")
}

//ejercicio 15, sumar consumición FUNCIONA
function addConsumption(idCreditCard, local, monto){
    var posCreditCard =encontrarCreditCardPorID(idCreditCard)
    if (creditCards[posCreditCard].fechaVencimiento> new Date()){
        creditCards[posCreditCard].saldo+=monto
        consumptions.push(new Consumption(idCreditCard, local, monto))
        return true
    }
    return false
}

//ejercicio 30, conectar métodos para sumar consumicion FUNCIONA
function linkAddConsumption() {
    let idCreditCard = getCreditCardConsumption();
    let local = getLocalConsumption();
    let monto = getMontoConsumption();

    if (addConsumption(idCreditCard, local, monto)) {
        alert("Consumo agregado correctamente.");
        clearConsumptionInputs();
    } else {
        alert("Error al agregar el consumo. Verifique los datos e intente nuevamente.");
    }
}

//ejercicio 31, conectar métodos para pagar el saldo FUNCIONA
function linkPayCreditCard() {
    var idCreditCard = getCreditCardPay();
    var monto = getMontoPay();
    var posTarjeta=encontrarCreditCardPorID(idCreditCard);
    var pago = creditCards[posTarjeta].pay(monto);
    if (pago==1){
        mensaje="Se realizo el pago total de la tarjeta"
    } else if(pago==0){
        mensaje="Se realizo el pago parcial de la tarjeta"
    }else{
        mensaje="No se pudo realizar el pago de la tarjeta"
    }
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)
    putMensajePayCreditCard(mensaje)
}

//ejercicio17, función para transferir dinero
function transferencia(idTransfiere, idRecibe, monto, moneda){
    let posTransfiere=encontrarClientePorID(idTransfiere)
    let posRecibe=encontrarClientePorID(idRecibe)
    if (posTransfiere<0 || posRecibe<0){
        return false
    }else if (moneda=="pesos"){
        if(clients[posTransfiere].cajaAhorroPesos>=monto){
            clients[posTransfiere].extraerDinero(monto, moneda)
            clients[posRecibe].ingresarDinero(monto, moneda)
            return true
    }
    }else if (moneda=="dolares"){
        if(clients[posTransfiere].cajaAhorroDolares>=monto && clients[posRecibe].cajaAhorroDolares>=0){
            clients[posTransfiere].extraerDinero(monto, moneda)
            clients[posRecibe].ingresarDinero(monto, moneda)
            return true
    }
    }else {
        return false
    }
}