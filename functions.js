//ejercicio7
function encontrarClientePorID(id) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}

//ejercicio8
function encontrarCreditCardPorID(id) {
    for (let i = 0; i < creditCards.length; i++) {
        if (creditCards[i].id === id) {
            return i; // Devuelve la posición de la tarjeta en el vector
        }
    }
    return -1; // Si no se encuentra la tarjeta, devuelve -1
}

//ejercicio9
function encontrarConsumptionPorID(id) {
    for (let i = 0; i < consumptions.length; i++) {
        if (consumptions[i].id === id) {
            return i; // Devuelve la posición del consumo en el vector
        }
    }
    return -1; // Si no se encuentra el consumo, devuelve -1
}
//ejercicio10
function encontrarTarjetasPorIDCliente(idCliente) {
    let tarjetasCliente = [];
    for (let i = 0; i < creditCards.length; i++) {
        if (creditCards[i].idClient === idCliente) {
            tarjetasCliente.push(creditCards[i]);
        }
    }
    return tarjetasCliente;
}
console.log(new Client(12345678, "pass1", "Juan", "García", 500, true))