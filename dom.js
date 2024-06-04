homebanking.style.display = "none";
login.style.display = "";

//Mostrar dinero en pantalla, extra nuestro :)
function refreshDinero(cajaAhorroPesos,cajaAhorroDolares,descubierto){
    document.getElementById("cajaDeAhorroPesos").innerHTML = cajaAhorroPesos
    if  (cajaAhorroDolares>=0){
        document.getElementById("cajaDeAhorroDolares").innerHTML = cajaAhorroDolares
    }else{
        document.getElementById("cajaDeAhorroDolares").innerHTML = "No posee caja de ahorro en dolares"
    }
    document.getElementById("descubierto").innerHTML = descubierto
}

//limpia todas las tablas de la pantalla
function cleanTables(){
    document.getElementById("tableListados").innerHTML = ""
    document.getElementById("tableSearch").innerHTML = ""
    document.getElementById("tableConsumptions").innerHTML = ""
    document.getElementById("showClient").innerHTML = ""
}
//Cargar todos los dropdowns de una en una sola función, extra nuestro :)
function cargarDropdowns(){
    cargarCreditCardDropdownConsumption()
    cargarCreditCardDropdownPay()
    cargarClienteOrigenDropdown()
    cargarClienteDestinoDropdown()
    cleanTables()
    refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto)
}

//-------------------------------------------------COMPRA VENTA DE DOLARES------------------------------------------------

//ejercicio21, traer moneda CompraVenta FUNCIONA
function getMonedaCompraVenta(){
    var radioButton = document.querySelector('input[name="radioMonedaCompraVenta"]:checked').id 
    if (radioButton == "radioPesosCompraVenta") {
        return "pesos"
    } else if (radioButton == "radioDolaresCompraVenta") {
        return "dolares"
    }   
}

//ejercicio21, traer monto CompraVenta FUNCIONA
function getMontoCompraVenta(){
    return Number.parseFloat(document.getElementById("montoCompraVenta").value)
}

//ejercicio21, mensaje CompraVenta FUNCIONA
function putMensajeCompraVenta(mensaje) {
    document.getElementById("mensajeCompraVenta").innerHTML = mensaje
}


//--------------------------------------------------RETIRO INGRESO DE DINERO-----------------------------------------------


//ejercicio21 traer moneda RetiroIngreso FUNCIONA
function getMonedaRetiroIngreso(){
    var radioButton = document.querySelector('input[name="radioMonedaRetiroIngreso"]:checked').id 
    if (radioButton == "radioPesosRetiroIngreso") {
        return "pesos"
    } else if (radioButton == "radioDolaresRetiroIngreso") {
        return "dolares"
    }   
}

//ejercicio21, traer monto FUNCIONA
function getMontoRetiroIngreso(){
    return Number.parseFloat(document.getElementById("montoRetiroIngreso").value)
}

function putMensajeRetiroIngreso(mensaje) {
    document.getElementById("mensajeRetiroIngreso").innerHTML = mensaje
}


//--------------------------------------------------Registro y Login------------------------------------------------------


//ejercicio 18, cambiar la pantalla cuándo se logea FUNCIONA
function changeScreen() {
    const homebanking = document.getElementById("homebanking");
    const login = document.getElementById("login");
    if(homebanking.style.display !== "none") {
        homebanking.style.display = "none";
        login.style.display = "";
    }
    else {
        refreshDinero(clients[posCliente].cajaAhorroPesos, clients[posCliente].cajaAhorroDolares, clients[posCliente].descubierto)
        homebanking.style.display = "";
        login.style.display = "none";
    }
}

//ejercicio 18, traer DNI de usuario FUNCIONA
function getDniUser(){
    return Number.parseInt(document.getElementById("dniUser").value)
}

//ejercicio 18, traer password de usuario FUNCIONA
function getPasswordUser(){
    return document.getElementById("passwordUser").value
}

//ejercicio 19, traer nombre de usuario FUNCIONA
function getNameUser(){
    return document.getElementById("nameUser").value
}

//ejercicio 19, traer apellido de usuario FUNCIONA
function getSurnameUser(){
    return document.getElementById("surnameUser").value
}

//ejercicio 19, traer ingresos anuales FUNCIONA
function getIngresosAnualesUser(){
    return document.getElementById("ingresosAnualesUser").value
}


//-----------------------------------------Sumar consumption y pagar saldo--------------------------------------------------


//ejercicio 30, cargar lista de tarjetas FUNCIONA
function cargarCreditCardDropdownConsumption() {
    var dropdown = document.getElementById("creditCardSelect");
    dropdown.innerHTML = "";
    var tarjetasCliente = [];
    tarjetasCliente = encontrarTarjetasPorIDCliente(clientId);
    
    for (let i = 0; i < tarjetasCliente.length; i++) {
        const option = document.createElement('option');
        option.value = tarjetasCliente[i].id;
        option.text = `${tarjetasCliente[i].provider} - ${tarjetasCliente[i].id}`;
        dropdown.add(option);
    }
}

//ejercicio 30, seleccionar tarjeta de crédito FUNCIONA
function getCreditCardConsumption() {
    return Number.parseInt(document.getElementById("creditCardSelect").value);
}

//ejercicio 30, traer local FUNCIONA
function getLocalConsumption() {
    return document.getElementById("localConsumption").value;
}

//ejercicio 30, traer monto FUNCIONA
function getMontoConsumption() {
    return Number.parseFloat(document.getElementById("montoConsumption").value);
}

//ejercicio 30, limpiar inputs FUNCIONA
function clearConsumptionInputs() {
    document.getElementById("localConsumption").value = "";
    document.getElementById("montoConsumption").value = "";
}

//ejercicio 31, cargar dropdown de tarjetas para pagar FUNCIONA
function cargarCreditCardDropdownPay() {
    var dropdownPay = document.getElementById("selectPayCreditCard");
    dropdownPay.innerHTML = "";
    var tarjetasCliente = [];
    tarjetasCliente = encontrarTarjetasPorIDCliente(clientId);
    for (let i = 0; i < tarjetasCliente.length; i++) {
        const option = document.createElement('option');
        option.value = tarjetasCliente[i].id;
        option.text = `${tarjetasCliente[i].provider} - ${tarjetasCliente[i].id}`;
        dropdownPay.add(option);
    }
}

//ejercicio 31, traer tarjeta para pagar FUNCIONA
function getCreditCardPay(){
    return Number.parseInt(document.getElementById("selectPayCreditCard").value)
}

//ejercicio 31, traer monto para pagar tarjeta FUNCIONA
function getMontoPay(){
    return Number.parseFloat(document.getElementById("montoPayCreditCard").value)
}

//ejercicio 31, enviar mensaje del pago de tarjeta FUNCIONA
function putMensajePayCreditCard(mensaje){
    document.getElementById("mensajePayCreditCard").innerHTML = mensaje
}


//-----------------------------------------------------Transferencia------------------------------------------------------------


//ejercicio 29, traer moneda para transferencia FUNCIONA
function getMonedaTransferencia(){
    var radioButton = document.querySelector('input[name="radioMonedaTransferencia"]:checked').id 
    if (radioButton == "radioPesosTransferencia") {
        return "pesos"
    } else if (radioButton == "radioDolaresTransferencia") {
        return "dolares"
    }   
}

//ejercicio 29, traer monto para transferencia FUNCIONA
function getMontoTransferencia(){
    return Number.parseFloat(document.getElementById("montoTransferencia").value)
}

//ejercicio 29, traer cliente de origen para transferencia FUNCIONA
function getClienteOrigenTransferencia(){
    return Number.parseInt(document.getElementById("selectClienteOrigen").value)
}

//ejercicio 29, traer cliente de destino para transferencia FUNCIONA
function getClienteDestinoTransferencia(){
    return Number.parseInt(document.getElementById("selectClienteDestino").value)
}

//ejercicio 29, cargar dropdown cliente origen FUNCIONA
function cargarClienteOrigenDropdown() {
    var dropdownClienteOrigen = document.getElementById("selectClienteOrigen");
    dropdownClienteOrigen.innerHTML = "";
    const option = document.createElement('option');
    option.value = clients[posCliente].id;
    option.text = `${clients[posCliente].name} ${clients[posCliente].surname} - ${clients[posCliente].dni}`;
    dropdownClienteOrigen.add(option);
}

//ejercicio 29, cargar dropdown cliente destino FUNCIONA
function cargarClienteDestinoDropdown() { 
    var dropdownClienteDestino = document.getElementById("selectClienteDestino");
    dropdownClienteDestino.innerHTML = "";
    for (let i = 0; i < clients.length; i++) {
        if (i!=posCliente){
            const option = document.createElement('option');
            option.value = clients[i].id;
            option.text = `${clients[i].name} ${clients[i].surname} - ${clients[i].dni}`;
            dropdownClienteDestino.add(option);
        }
    }
}

//ejercicio 29, enviar mensaje de transferencia FUNCIONA
function putMensajeTransferencia(mensaje){
    document.getElementById("mensajeTransferencia").innerHTML = mensaje
}


//-------------------------------------------------------Tablas------------------------------------------------------------


//ejercicio 25, función para generar tabla FUNCIONA
function generateTable(listaObj, containerId, headers) {
    const container = document.getElementById(containerId);
    var body=false
    let table = '<table class="table" border="1"><thead><tr>';

    // Obtener y agregar los encabezados 
    for (let i = 0; i < headers.length; i++) {
        table += `<th>${headers[i]}</th>`;
    }
    table += '</tr></thead><tbody>';

    // Agregar filas de datos
    for (let i = 0; i < listaObj.length; i++) {
        body=true
        table += '<tr>';
        for (let x in listaObj[i]) {
            for (let cat=0; cat < headers.length; cat++) {
                if(x==headers[cat]){
                    table += `<td>${listaObj[i][x]}</td>`;
                }
            }
        }
        table += '</tr>';
    }
    table += '</tbody></table>';
    if (body){
        container.innerHTML = table;
    }else{
        container.innerHTML = "";
    }

}

//ejercicio 26, función para crear tablas, pero en csv FUNCIONA
function generateCSV(listaObj, containerId, headers) {
    const container = document.getElementById(containerId);
    let csv = '<p>' ;

    for (let i = 0; i < headers.length; i++) {
        csv += headers[i];
        if (i < headers.length - 1) {
            csv += ';';
        }
    }
    csv += '</p>';

    for (let i = 0; i < listaObj.length; i++) {
        csv += '<p>';
        for (let j = 0; j < headers.length; j++) {
            let header = headers[j];
            if (listaObj[i][header] !== undefined) {
                csv += listaObj[i][header];
            }
            if (j < headers.length - 1) {
                csv += ';';
            }
        }
        csv += '</p>';
    }

    container.innerHTML = csv;
}

//ejercicio 28, traer el valor buscado por el usuario FUNCIONA
function getSearch(){
    return document.getElementById("clientSearch").value
}


//-----------------------------------------------Mínimos y máximos---------------------------------------------------------


//ejercicio 22 y 23, mostrar en pantalla los datos del cliente FUNCIONA
function mostrarDatosClient(client) {
    const container = document.getElementById("showClient");
    let descripcion = '';

    for (let i in client) {
        descripcion += `<p><b>${i} :</b> ${client[i]}</p>`;
    }
    container.innerHTML = descripcion;
}