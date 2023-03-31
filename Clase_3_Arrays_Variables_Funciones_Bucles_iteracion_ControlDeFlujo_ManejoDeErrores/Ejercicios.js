// /* 1- Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el usuario
//    o declarado anteriormente en su código y mostrar por consola el tipo de dato que es.  */

// function Dato(dato){                         //Creamos función
//     console.log(dato,"-->", typeof(dato))    //Mostramos por consola el tipo de dato
// }

// Dato("asd")   //String                       
// Dato(8)       //Numero
// Dato(true)    //Booleano



// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 2- Dado dos números ingresados por el usuario, se pide realizar una función que
//    devuelve la resta de ambos números. Mostrar el resultado por la consola.*/

// function Resta(num1, num2) {
//   return num1 - num2;
// }

// let num1 = parseInt (prompt("Ingresa tu Primer dígito: "));
// let num2 = parseInt (prompt("Ingresa tu Segundo dígito: "));


// console.log("La resta de " + num1 + " y de " + num2 + " es igual a: " + Resta(num1, num2))


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 3- Generar una función que le ingresen por parámetro dos valores distintos en dos
//    variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
//    Pasarlo a a y mostrarlos. */



// function IntercambiarValores(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log(" 'a' vale: " + a + " y 'b' vale: " + b)
// }

// IntercambiarValores(10, 1)


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 4- Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
//    calcular su perímetro, su superficie, e informar los mismos en consola. */


// function valorCuadrado(lado) {
//     let perimetro = lado * 4;
//     let superficie = lado * lado;
//     console.log("El valor del perimetro del cuadrado es de: " + perimetro +  " y El valor de la superficie del cuadrado es: " + superficie);
// }

// valorCuadrado(5);


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 5- Generar una función que dada una temperatura en grados fahrenheit los convierta a
//       grados Celsius. */

// function ConvertirGrados(F) {
//    return (F - 32) * 5/9;
// }

// let F = parseInt (prompt("Ingresa los °F actuales: "));

// console.log("Actualmente hace " + F + " °F, por lo que en °C serian: " + ConvertirGrados(F))


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 6- Realizar una función que calcule el factorial de un número ingresado por el usuario (el
//       número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
//       consola. */


// function Factorial(numeroFactorial) {
//    let num = parseInt (prompt("Ingrese un numero menor a '10': "));

//    if(num > 10) {
//       console.log("Numero incorrecto, es mayor a 10");
//    }

//    let resultado = 1
//    for (let i = 1; i <= num; i++) {
//       resultado = resultado * i;
//    }

//    console.log("el Factorial de " + num + " es: " + resultado)
// }


// Factorial()


// // -----------------------------------------------------------------------------------------------------------------------------------------------



// 7- Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
//    indique si ese texto es un palindromo. Ejemplo de palindromo: “Somos o no somos”.

function Palindromo() {
    let resultado = "Es un palindromo"
    
    let texto = prompt("Ingrese un texto: ");
    texto = texto.toLocaleLowerCase();
    texto = texto.replace(/[^a-z0-9]+/g, "").split("")

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] !== texto.reverse()[i]) {
            resultado = "No es un Palindromo";
            break;
        }
    }
    console.log(resultado)
}

Palindromo()


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 8- Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
//       lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
//       Javascript. */

// Con Funciones:

// var texto = prompt("Ingrese un texto: ")

// function verTexto(texto) {
//     console.log(texto.toLocaleLowerCase())
//     console.log(texto.toLocaleUpperCase())
// }

// verTexto(texto)




// Sin Funciones

// let texto = prompt("Ingrese un texto: ")

// let minuscula = texto.toLocaleLowerCase()
// console.log("en minuscula es: " + minuscula)

// let mayuscula = texto.toLocaleUpperCase()
// console.log("en mayuscula es: " + mayuscula)





// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 9- Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
//    calificación resultante según la nota ingresada:
//    0-3: Muy deficiente
//    3-5: Insuficiente
//    5-6: Suficiente */
//    6-7: Bien
//    7-9: Notable
//    9-10: Sobresaliente


// let nota = parseFloat(prompt("Ingrese la Nota (entre 0 y 10) del alumno: "))

// switch(true) {
//     case (nota >= 0 && nota < 3):
//         console.log("Muy deficiente");
//         break;
    
//     case (nota >= 3 && nota < 5):
//         console.log("Insuficiente")
//         break;

//     case (nota >= 5 && nota < 6):
//         console.log("Suficiente")
//         break;
    
//     case (nota >= 6 && nota < 7):
//         console.log("Bien")
//         break;
    
//     case (nota >= 7 && nota < 9):
//         console.log("Notable")
//         break;
   
//     case (nota >= 9 && nota <= 10):
//         console.log("Sobresaliente")
//         break;
    
//     default:
//         console.log("Nota invalida, debe ingrese un numero entre 0 y 10")

// }


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 10- Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
//        devuelve si ese mes tiene 30 o 31 días. */

// let mes = parseInt(prompt("Ingrese el numero (entre 0 y 12) del mes: "))

// if(mes == 2) {
//     console.log("Este mes tiene 28 o 29 días")
// } else if (mes == 4 | mes == 6 | mes == 9 | mes == 11) {
//     console.log("Este mes tiene 30 días")
// } else  if (mes == 1 | mes == 3 | mes == 5 | mes == 7 | mes == 8 | mes == 10 | mes == 12){
//     console.log("Este mes tiene 31 días")
// } else {
//     console.log("Numero invalido")
// }



// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 11- Crear un script que genere una pirámide como el ejemplo con los números del 1 al
//        número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
//        1
//        12
//        123
//        1234
//        12345
//        123456 
//        …… */



// piramide = parseInt(prompt("Ingrese un numero entre 1 y 10: "))

// if (piramide < 1 || piramide > 10) {
//     console.log("Numero inválido");
//   } else {
//     for(i = 1; i <= piramide; i++) {

//         let almacenarNumeros = "";

//         for(n = 1; n <= i; n++) {
//             almacenarNumeros += n
//         }
//         console.log(almacenarNumeros)
//     }
//   }


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 12- Generar una función donde ingresen dos números, el primero corresponde a la
//        cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
//        colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
//        disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola. */


// function ordenarStocks(cantidadStock, cantidadCaja) {
//     let cajasLlenas = Math.floor(cantidadStock/cantidadCaja)
//     let stockSuelto = cantidadStock - cajasLlenas*cantidadCaja

//     console.log("La cantidad de cajas llenas es de: " + cajasLlenas)
//     console.log("La cantidad de productos sueltos es de: " + stockSuelto)
// }

// let cantidadStock = parseInt(prompt("Ingrese la cantidad de Bultos de Stocks: "))
// let cantidadCaja = parseInt(prompt("Ingrese la cantidad de Cajas a llenar: "))

// ordenarStocks(cantidadStock, cantidadCaja)


// // -----------------------------------------------------------------------------------------------------------------------------------------------


// /* 13- Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
//     Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
//     Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
//     través de su código y el script saca el descuento correspondiente por la consola. */


// let codigo = prompt("Ingrese su codigo de descuento: ")

// function codigoDescuento(codigo) {
    
//     let Ford_Fiesta = "fiesta";
//     let Ford_Focus = "focus";

//     if (codigo === Ford_Fiesta) {
//         console.log("Usted tiene un descuento del 5% en la compra de su Ford Fiesta");
//     } else if (codigo === Ford_Focus) {
//         console.log("Usted tiene un descuento del 10% en la compra de su Ford Focus");
//     } else {
//         console.log("Codigo invalido")
//     }
// }


// codigoDescuento(codigo)