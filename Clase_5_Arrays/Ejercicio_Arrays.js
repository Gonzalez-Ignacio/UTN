// /* 1- Crea un array que contenga el nombre de cinco colores escritos como strings. */

// const colores = ["Rojo", "Azul", "Amarillo", "Verde", "Violeta"];
// console.log(colores);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


/* 2- Guarda en una variable el tercer elemento del array del ejercicio anterior */

// const verVariableGuardada = colores[2];
// console.log(verVariableGuardada);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 3- Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1. */

// console.log(colores[0][0]);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 4- Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random(). */


// let numRandom = Math.floor(Math.random() * 99) + 1;
// console.log(numRandom)


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 5- Rellena un array con los números del 1 al 10. Muéstralo por la consola.  */

// let numeros = [];
// for(let i = 1; i <= 10; i++) {
//     numeros.push(i)
// }
// console.log(numeros)


// /* 6- Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola. */

// let numRellenarArray = [];
// for(let i = 0; i < 10; i++){
//     let numRandom = Math.floor(Math.random() * 100);
//     numRellenarArray.push(numRandom);
// }
// console.log(numRellenarArray);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 7- Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola */

// let numCopia = numRellenarArray.slice();
// console.log(numCopia);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 8- Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
//       Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guion
//       medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
//       luego recorriendolo para mostrar el resultado deseado del ejercicio. */


// let guardar_texto = []
// let cadena_texto;

// while(true) {
//     let cadena_texto = prompt("Ingrese un texto o ingresa 'cancelar' para finalizar: ")

//     if(cadena_texto === "cancelar") {
//         break;
//     } 
//     guardar_texto.push(cadena_texto);
// }
// let guion = guardar_texto.join("-")
// console.log(guion) 
// console.log(guardar_texto);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 9- Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
//       convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
//       Mostrar el resultado elemento de html. 
//   10- Generar la inversa del ejercicio anterior (de pesos a dólares).*/

// const boton_convertirAPesos = document.getElementById("convertirAPesos");
// convertirAPesos.addEventListener("click", function() {
//     const moneda_pesos = document.getElementById("pesos").value;
//     if(moneda_pesos){
//         const resultado = moneda_pesos / 300
//         document.getElementById("dolares").value = resultado.toFixed(2);
//     }
// })

// const boton_convertirADolares = document.getElementById("convertirADolares");
// boton_convertirADolares.addEventListener("click", function() {
//     const moneda_Dolares = document.getElementById("dolares").value;
//     if(moneda_Dolares){
//         const resultado = moneda_Dolares * 300
//         document.getElementById("pesos").value = resultado.toFixed(2);
//     }
// })

    


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 11- Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
//        ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
//        son 86 grados fahrenheit. */


// const boton_Convertir = document.getElementById("convertir");
// boton_Convertir.addEventListener("click", function() {
//     const centigrados = document.getElementById("centigrados").value;
//     const resultado = document.getElementById("mostraResultado");

//     if(centigrados) {
//         const resultado = (centigrados * 9/5) + 32;
//         mostraResultado.innerText = "°F: " + resultado
//     }
// })


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 12- Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
//     podremos especificar las características de la caja. Ejemplo: */


// const Formulario = document.getElementById("formulario");
// const Resultado = document.getElementById("resultado");

// Formulario.addEventListener("submit", function() {
//     event.preventDefault();

//     const nombre = document.getElementById("nombre").value
//     const material = document.getElementById("materialCaja").value
//     var dimensiones = document.querySelector('input[name="dimensiones"]:checked').value;
//     const comentario = document.getElementById("comentario").value


//     Resultado.innerText = `${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`
    
// })


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 13- A través de un formulario, el usuario debe introducir un número secreto que estará
//     entre 0 y 5.
//     El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
//     juego.
//     Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde. */

// const formulario = document.getElementById("formulario");
// const resultado = document.getElementById("resultado");
// let intentos = 3;
// const numeroSecreto = Math.floor(Math.random() * 6);
// console.log(numeroSecreto)                                                                  //Deje el numero random por consola

// formulario.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let numSeleccionado = parseInt(formulario.numero.value);
    
        
//     if(numSeleccionado === numeroSecreto) {
//         resultado.textContent = "Ganaste, has acertado el numero!!";
//     }else {
//         intentos--;
//         if(intentos > 0) {
//             resultado.textContent = `Fallaste!! te quedan ${intentos} intentos`;
//     }   else{
//         resultado.textContent = `Has Perdido!! El numero secreto era ${numeroSecreto}`;
//         formulario.numero.disabled = true;
//         formulario.querySelector("button").disabled = true
//         }
//     } 
// })


// // -----------------------------------------------------------------------------------------------------------------------------------------------



// /* 14- Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
//     desordenada a medida que se agregan. */


// const btn_Agregar = document.getElementById("btn_Agregar");         
// const Resultado = document.getElementById("guardarTexto");


// btn_Agregar.addEventListener("click", function() {
    
        
//     const texto = document.getElementById("texto").value;                   //Evaluamos nombre ingresado
//     const textoGuardado = document.createElement("li")                      //Creamos el "li"

//     textoGuardado.innerText = texto;                                        //Lo mostramos

//     Resultado.appendChild(textoGuardado)                                    //Lo agregamos a nuestra "ul" como hijo
// })
        
 
