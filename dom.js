//ejercicio21, traer moneda
function compraVentaDolaresOPesos(){
    var radioButton = document.querySelector('input[name="radioMonedaCompraVenta"]:checked').id 
    if (radioButton == "radioPesosCompraVenta") {
        return "pesos"
    } else if (radioButton == "radioDolaresCompraVenta") {
        return "dolares"
    }   
}

//ejercicio21, traer monto
function getMontoCompraVenta(){
    return document.getElementById("montoCompraVenta").value
}