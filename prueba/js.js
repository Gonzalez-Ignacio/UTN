const boton_Convertir = document.getElementById("convertir");
boton_Convertir.addEventListener("click", function() {

    const moneda_Pesos = document.getElementById("pesos").value;
    const moneda_Dolares = document.getElementById("dolares").value;

    if(moneda_Pesos){
        const resultado = moneda_Pesos / 300;
        document.getElementById("dolares").value = resultado.toFixed(2);
    }

    if(moneda_Dolares){
        const resultado = moneda_Dolares * 300;
        document.getElementById("pesos").value = resultado.toFixed(2);
    }
});