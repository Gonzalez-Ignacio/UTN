// 1- Consigna: Crea una función que sume dos números.
//    Ejemplo de entrada: suma(2, 4)
//    Salida esperada: 6


// const botonSumar = document.getElementById("btn_sumar");
// const Resultado = document.getElementById("resultado");

// botonSumar.addEventListener("click", function() {
//     const numero1 = parseInt(document.getElementById("num1").value);
//     const numero2 = parseInt(document.getElementById("num2").value);

//     Resultado.innerText = numero1 + numero2
// })



// // ----------------------------------------------------------------------------------------------------------------------------------------



// 2- Consigna: Crea una función que determine si un número es par o impar.
//    Ejemplo de entrada: esPar(3)
//    Salida esperada: false

// const Evaluar = document.getElementById("evaluar");
// const resParImpar = document.getElementById("resParImpar");

// Evaluar.addEventListener("click", function() {

//     const esParImpar = parseInt(document.getElementById("ParImpar").value)

//     if(esParImpar % 2 == 0){
//         resParImpar.innerText = "Es Par"
//     } else {
//         resParImpar.innerText = "es Impar"
//     }
// })



// // ----------------------------------------------------------------------------------------------------------------------------------------



// /* 3- Consigna: Crea una función que convierta una cadena de texto a mayúsculas.
//       Ejemplo de entrada: convertirAMayusculas("hola mundo")
//       Salida esperada: "HOLA MUNDO" */


// const Convertir = document.getElementById("convertir");
// const resConvertirTexto = document.getElementById("resConvertirTexto");

// Convertir.addEventListener("click", function() {

//     const verCadenaTextoEnMayuscula = document.getElementById("texto").value;

//     resConvertirTexto.innerText = verCadenaTextoEnMayuscula.toUpperCase();
// })



// // ----------------------------------------------------------------------------------------------------------------------------------------



// /* 4- Consigna: Crea una función que determine si una cadena de texto es un palindromo.
//       Ejemplo de entrada: esPalindromo("anita lava la tina")
//       Salida esperada: true */


// const VerificarPalindromo = document.getElementById("verificar");
// const resPalindromo = document.getElementById("resPalindromo");


// VerificarPalindromo.addEventListener("click", function () {

//     const verPalindromo = document.getElementById("palindromo").value;

//     let texto = verPalindromo.replace(/[^a-z0-9]+/g, "").toLowerCase();
//     let textoInvertido = texto.split("").reverse().join("");

//     if(texto !== textoInvertido) {
//         resPalindromo.innerText = "No es un Palindromo"
//     }else {
//         resPalindromo.innerText = "Es un Palindromo"
//     }

// })



// // ----------------------------------------------------------------------------------------------------------------------------------------




// /* 5- Consigna: Crea una función que calcule el factorial de un número.
//       Ejemplo de entrada: factorial(5)
//       Salida esperada: 120 */


// const calcularFactorial = document.getElementById("calcularFactorial");
// const resFactorial = document.getElementById("resFactorial");

// calcularFactorial.addEventListener("click", function() {

//     const factorial = document.getElementById("factorial").value;
//     let resultado = 1;

//     for (let i = 1; i <= factorial; i++) {
//         resultado = resultado * i;
//     }
//     resFactorial.innerText = resultado;
// })



// // ----------------------------------------------------------------------------------------------------------------------------------------



// /* 6- Consigna: Crea una función que determine si un número es primo.
//       Ejemplo de entrada: esPrimo(7)
//       Salida esperada: true */



// const verificarNumPrimo = document.getElementById("verificarNumPrimo");
// const resNumPrimo = document.getElementById("resNumPrimo");

// verificarNumPrimo.addEventListener("click", function() {

//     const num_primo = parseInt(document.getElementById("num_primo").value);
//     let esPrimo = true;

//     if(num_primo < 2) {
//         esPrimo = false
//     }else {
//         for(let i = 2; i <= Math.sqrt(num_primo); i++) {
//             if(num_primo % i === 0) {
//                 esPrimo = false;
//                 break;
//             }
//         }
//     }

//     if(esPrimo) {
//         resNumPrimo.innerText = "Es un numero primo";
//     } else {
//         resNumPrimo.innerText = "No es un numero primo";
//     }
// })



// // ----------------------------------------------------------------------------------------------------------------------------------------



// /* 7- Consigna: Crea una función que determine el número máximo en un arreglo de números.
//       Ejemplo de entrada: máximo([3, 5, 2, 8])
//       Salida esperada: 8 */


// const verificarMaxArray = document.getElementById("verificarMaxArray");
// const resMaxArray = document.getElementById("resMaxArray");
// const resGuardarNumero = document.getElementById("resGuardarNumero")

// let guardarNumero = []
// let numMaximo = null


// verificarMaxArray.addEventListener("click", function() {
    
//     const numArray = document.getElementById("maxArray");
//     const numero = parseInt(numArray.value);

//     guardarNumero.push(numero);

//     if(numMaximo === null || numero > numMaximo) {
//         numMaximo = numero
//     }

//     resGuardarNumero.innerText = "Tus numeros seleccionados son: " + guardarNumero;
//     resMaxArray.innerText = "\n El numero Maximo que agregaste es: " + numMaximo ;
// })



// // ----------------------------------------------------------------------------------------------------------------------------------------



// /* 8- Consigna: Crea una función que determine si un número está en un arreglo de números.
//       Ejemplo de entrada: estaEnArreglo(5, [3, 5, 2, 8])
//       Salida esperada: true */



// const btn_comprobarNumArray = document.getElementById("btn_comprobarNumArray");
// const btn_AgregarNumArray = document.getElementById("btn_AgregarNumArray");
// const resMostrarArray = document.getElementById("resMostrarArray");
// const resComprobar = document.getElementById("resComprobar");
// let guardarNumero = [];


// btn_AgregarNumArray.addEventListener("click", function() {
//     const numero = document.getElementById("numero").value;
//     guardarNumero.push(numero);
//     resMostrarArray.innerText = "Los numeros ingresados son: " + guardarNumero;
    
// })


// btn_comprobarNumArray.addEventListener("click", function() {
//     const numero = document.getElementById("numero").value;
//     let verificar = false;

//     for(let i = 0; i < guardarNumero.length; i++) {
//         if(numero == guardarNumero[i]){
//             verificar = true;
//             break;
//         }
//     }
    
//     if(verificar) {
//         resComprobar.innerText = `El numero ${numero} está dentro del Array.`
//     } else {
//         resComprobar.innerText = `El numero ${numero} NO está dentro del Array.`
//     }
// })



// ----------------------------------------------------------------------------------------------------------------------------------------



// /* 9- Consigna: Crea una función que calcule el promedio de un arreglo de números.
//       Ejemplo de entrada: promedio([3, 5, 2, 8])
//       Salida esperada: 4.5 */


// const btn_AgregarNumPromedio = document.getElementById("btn_AgregarNumPromedio");
// const resMostrarArray = document.getElementById("resMostrarArray");
// let guardarNumeroPromedio = []

// btn_AgregarNumPromedio.addEventListener("click", function() {

//     const numArrayPromedio = document.getElementById("promedio").value;
//     guardarNumeroPromedio.push(numArrayPromedio);
//     resMostrarArray.innerText =  "El los numeros ingresados en array son: " + guardarNumeroPromedio.join(", ");
// })



// const btn_SumarPromedio = document.getElementById("btn_SumarPromedio");
// const resMostrarPromedio = document.getElementById("resMostrarPromedio");

// btn_SumarPromedio.addEventListener("click", function() {

//     let suma = 0;

//     for(let i = 0; i < guardarNumeroPromedio.length; i++) {
//         suma += parseFloat(guardarNumeroPromedio[i])
//     }
//     let promedio = suma / guardarNumeroPromedio.length
//     resMostrarPromedio.innerText = `El promedio es: ${promedio.toFixed(2)}`
    
// })



// ----------------------------------------------------------------------------------------------------------------------------------------



// /* 10- Consigna: Crea una función que convierta un número a su equivalente en texto (por ejemplo, convierte 123 a "ciento veintitrés").
//        Ejemplo de entrada: convertirATexto(123)
//        Salida esperada: "ciento veintitrés" */


