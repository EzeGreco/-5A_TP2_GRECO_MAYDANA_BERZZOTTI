const COTIZACION_DOLAR=100000//dolar massita
var clientId = 1
var posCliente=encontrarClientePorID(clientId)
changeScreen()
clients[0].cajaAhorroPesos = 10000000
clients[0].cajaAhorroDolares = 10
clients[1].cajaAhorroPesos = 100000
clients[1].cajaAhorroDolares = 1
clients[2].cajaAhorroPesos = 20000000
clients[2].cajaAhorroDolares = 10
clients[3].cajaAhorroPesos = 10000000
clients[3].cajaAhorroDolares = 10
clients[4].cajaAhorroPesos = -100
clients[4].cajaAhorroDolares = 0
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
            consumosTarjeta.push(consumptions[i]);
        }
    }
    return consumosTarjeta;
}


//--------------------------------------------------RETIRO INGRESO DE DINERO-----------------------------------------------


//ejercicio21 Linkear métodos CompraVenta FUNCIONA
function linkCompraVenta(){
    var monto=getMontoCompraVenta()
    var cajaOrigen=getMonedaCompraVenta()
    var mensaje= ""
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
    var monto=getMontoRetiroIngreso()
    var moneda=getMonedaRetiroIngreso()
    var mensaje= ""
    if (clients[posCliente].extraerDinero(monto,moneda)){
        mensaje="Extracción realizada"
    }else{
        mensaje="Extracción fallida"
    }
    putMensajeRetiroIngreso(mensaje)
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)

}


//--------------------------------------------------Registro y Login------------------------------------------------------


//ejercicio21 Linkear métodos Ingreso FUNCIONA
function linkIngreso(){
    var monto=getMontoRetiroIngreso()
    var moneda=getMonedaRetiroIngreso()
    var mensaje= ""
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


//-----------------------------------------Sumar consumption y pagar saldo--------------------------------------------------


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
    var mensaje= ""
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


//-----------------------------------------------------Transferencia------------------------------------------------------------


//ejercicio 17, función para transferir dinero FUNCIONA
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

//ejercicio 29, conectar métodos para transferir dinero FUNCIONA
function linkTransferencia() {
    var idClienteOrigen = getClienteOrigenTransferencia();
    var idClienteDestino = getClienteDestinoTransferencia();
    var monto = getMontoTransferencia();
    var moneda= getMonedaTransferencia();
    var mensaje= ""
    var transf = transferencia(idClienteOrigen, idClienteDestino, monto, moneda);
    if (transf){
        mensaje="Se realizo correctamente la transferencia"
    } else{
        mensaje="No se pudo concretar la transferencia"
    }
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto, clients[posCliente].descubiertoUsado)
    putMensajeTransferencia(mensaje)
}


//-------------------------------------------------------Tablas------------------------------------------------------------


//ejercicio 25, linkear mostrar tabla clients FUNCIONA
function linkMostrarTablaClients(){
    var headers=["dni","name","surname"]
    var containerId="tableListados"
    generateTable(clients, containerId, headers)
}

//ejercicio 26, linkear mostrar csv clients FUNCIONA
function linkMostrarCSVClients(){
    var headers=["id","dni"]
    var containerId="tableListados"
    generateCSV(clients, containerId, headers)
}

//ejercicio 27, función para crear un vector con los clientes morosos FUNCIONA
function buscarClientsMorosos(){
    let clientsM = [];
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].cajaAhorroPesos < 0) {
            clientsM.push(clients[i]);
        }
    }
    return clientsM;
}

//ejercicio 27, linkear mostrar tabla clients morosos FUNCIONA
function linkMostrarTablaMorosos(){;
    var headers=["dni","name","surname", "cajaAhorroPesos"];
    var containerId="tableListados";
    var clientsMorosos=buscarClientsMorosos();
    generateTable(clientsMorosos, containerId, headers);
};

//ejercicio 28, función para buscar clients FUNCIONA
function searchClients(search){
    let clientsS = [];
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].surname == search || clients[i].dni == search) {
            clientsS.push(clients[i]);
        }
    }
    return clientsS;
}

//ejercicio 28, linkear mostrar tabla clients buscados FUNCIONA
function linkSearchClients(){;
    var search= getSearch();
    if (search.length>=3){
        var headers=["dni","name","surname", "cajaAhorroPesos", "cajaAhorroDolares"];
        var containerId="tableSearch";
        var clientsSearched=searchClients(search);
        generateTable(clientsSearched, containerId, headers);
    }
};


//-----------------------------------------------Mínimos y máximos---------------------------------------------------------


//ejercicio 22 y 23, función para buscar el total de valor en pesos que posee un cliente FUNCIONA
function findTotal(cliente){
    var total=0
    var pesos = cliente.cajaAhorroPesos
    var dolares = cliente.cajaAhorroDolares
    if (dolares < 0){
        total = pesos
    }else{
        total= (dolares*COTIZACION_DOLAR)+pesos
    }
    return total
}

//ejercicio 22 y 23, función para encontrar consumos usuario FUNCIONA
function encontrarConsumosPorUsuario(idCliente){
    var consumosDeUsuario=[]
    var tarjetasDeUsuario=encontrarTarjetasPorIDCliente(idCliente)
    for (let i = 0; i < tarjetasDeUsuario.length; i++) {
        var consumosDeTarjeta = encontrarConsumosPorTarjeta(tarjetasDeUsuario[i].id)
        for (let x = 0; x < consumosDeTarjeta.length; x++) {
            consumosDeUsuario.push(consumosDeTarjeta[x])
        }
    }
    return consumosDeUsuario
}

//ejercicio 22, función para buscar el id del cliente con el máximo FUNCIONA
function findMaximoClient() {
    let idMaximoClient = -1;
    let maxTotal = null;

    for (let i = 0; i < clients.length; i++) {
        var total = findTotal(clients[i]);
        if (total > maxTotal || total==null) {
            maxTotal = total;
            idMaximoClient = clients[i].id;
        }
    }

    return idMaximoClient;
}
 
//ejercicio 23, función para buscar el id del cliente con el mínimo FUNCIONA
function findMinimoClient() {
    let idMinimoClient = -1;
    let minTotal = null;

    for (let i = 0; i < clients.length; i++) {
        var total = findTotal(clients[i]);
        if (total < minTotal || total==null)  {
            minTotal = total;
            idMinimoClient = clients[i].id;
        }
    }

    return idMinimoClient;
}

//ejercicio 22, conectar las funciones para mostrar el maximo cliente FUNCIONA
function linkMostrarMaximoCliente(){
    idClienteMax = findMaximoClient()
    mostrarDatosClient(clients[encontrarClientePorID(idClienteMax)])
    var containerIdConsumptions="tableConsumptions"
    var headersConsumptions=["idCreditCard", "fecha", "local", "monto"]
    var consumosUsuario = encontrarConsumosPorUsuario(clients[encontrarClientePorID(idClienteMax)].id)
    generateTable(consumosUsuario,containerIdConsumptions,headersConsumptions)
}

//ejercicio 23, conectar las funciones para mostrar el minimo cliente FUNCIONA
function linkMostrarMinimoCliente(){
    idClienteMin = findMinimoClient()
    mostrarDatosClient(clients[encontrarClientePorID(idClienteMin)])
    var containerIdConsumptions="tableConsumptions"
    var headersConsumptions=["idCreditCard", "fecha", "local", "monto"]
    var consumosUsuario = encontrarConsumosPorUsuario(clients[encontrarClientePorID(idClienteMin)].id)
    generateTable(consumosUsuario,containerIdConsumptions,headersConsumptions)
}