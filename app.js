////console.log("Hola a todos");
////console.log(5 + 5);
////console.log("WTF");

/************* Uso de VARIABLES
var nombre = 'Juan'; //Crear y asignar variable en el mismo paso
console.log(nombre);
console.log(typeof (nombre)); //typeof: funcion para reconocer el tipo de dato de una variable

var edad = 31;
console.log(edad);
console.log(typeof (edad));

edad = "Cinco";
console.log(edad);
console.log(typeof (edad));     //demostracion de Tipado automatico


var sueldo = 100500.21;
console.log(sueldo);
console.log(typeof (sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof (tieneTrabajo));

var puestoDeTrabajo; //Crear variable
console.log(puestoDeTrabajo); //undefined (no se definio porque no esta asignada)
puestoDeTrabajo = null; //asignar variable
console.log(puestoDeTrabajo); 
*/

/************* Operadores matematicos + - * / 


var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 31;
edadMaria = 28;
yearActual = 2021;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nacion Ana: ' + yearAna);
console.log("Año en que nacion Ana 2: " + yearAna); // ' o " es igual
 */

/* Operadores logicos, unarios y de asignacion 
//Logicos < > <= >= == 
var edadJuan = 31;
var edadLeo = 33;
var EsLeoMayor = edadLeo > edadJuan;
console.log("EsLeoMayor " + EsLeoMayor);
console.log(typeof (EsLeoMayor));

varSonIguales = !(edadLeo == edadJuan); //Con el ! obtengo lo opuesto a la respuesta que devuelve el ()
console.log("varSonIguales " + varSonIguales);

//Unarios ++ (incremento) y -- (decremento)

edadJuan++; //32
console.log("Nueva edad Juan 0 " + edadJuan); //32

console.log("Nueva edad Juan 1 " + edadJuan++); //el operador unario ++ se aplica despues de mostrarse la variable (muestra 32)
console.log("Nueva edad Juan 2 " + edadJuan); //(muestra 33)

console.log("Nueva edad Juan 3 " + ++edadJuan); //el operador unario ++ se aplica ANTES de mostrarse la variable (muestra 34)

//Asignacion += -= *= /= %= (resto de la division)

var a = 2;
var b = 4;

// a = a + b; //es lo mismo que lo de abajo
a += b;

console.log(a);
*/

/* 
//Sentencia IF ELSE


var miNombre = 'Juan';
var esCasado = false;

if (esCasado == true) {
    console.log(miNombre + ' es casado');
} else {
    console.log(miNombre + ' es soltero');
}
*/

/*
//Sentencia IF ELSE ANIDADAS 

var nombre = 'Juan';
var edad = 65;

if (edad < 12) {
    console.log(nombre + ' es un niño');
    } else if ((edad > 11) && (edad < 18)) {
        console.log(nombre + ' es un adolescente');
        } else if ((edad > 17) && (edad < 60)) {
            console.log(nombre + ' es un adulto');
            } else {
                console.log(nombre + ' es un anciano');
            }
                    
*/

/* Sentencia SWITCH 

var mes = 1;
switch (mes) {
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes NO encontrado');
}

*/

/* Sentencia FOR 

//Escribir numeros del 1 al 50
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('Y ASI hasta el 50');

//Pero, tengo el FOR que me va a repetir codigo sin tener que escribir las 50 veces

for (var inicio = 1; inicio <= 10; inicio++) { //de uno en uno normal
    console.log(inicio)
}

for (var inicio = 1; inicio <= 10; inicio+=2) { //de dos en dos
    console.log(inicio)
}

for (var inicio = 10; inicio >= 1; inicio--) { //de uno en uno reverso
    console.log(inicio)
}
*/

/* WHILE y DO WHILE

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log(i);
//vale 11 porque incremento el ultimo valor y luego NO entra al while para mostrar

//DO WHILE, permite al MENOS hacer 1 iteracion, 
//HACE LA PRIMERA AUNQUE NO SE CUMPLA porque la condicion la verifica luego de ejecutar. 
//EJ:

var a = 18;
do {
    console.log(a);
    a++;
} while (a < 10);

//OTRA
var a = 1;
do {
    console.log(a);
    a++;
} while (a < 10);

console.log(a)



//en reversa de 5 a 0
var b = 5
do {
    console.log(b);
    b--;

}while(b >= -5)
*/

