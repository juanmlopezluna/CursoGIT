/*//basico
function mensaje() {
	console.log('mensaje desde la funcion');
}

mensaje();

//con argumento
function mensaje2(msj) {
	console.log(msj);
}

var msj = 'mensaje desde la funcion con envio de argumento'
mensaje2(msj);

//con retorno (sin argumento)
function mensaje3() {
	return 'mensaje de retorno de la funcion';
}

var msj = mensaje3();
console.log(msj);
*/

/*
//argumnetos de una funcion
function sumar(a, b, c) {

	return (a + b + c);

}

function sumar1(a, b, c=3) { //le agrega un valor por defecto (que usara en caso de que la funcion sea llamada con solo 2 arg)

	return (a + b + c);

}


var result = sumar(5, 4, 1);
console.log(result);

var result1 = sumar1(4, 4);
console.log(result1);

var result2 = sumar1(4, 4, 2);
console.log(result2);

//funciones anonimas (funciones como expresiones)
var unaSuma = function (a, b, c) {
	return a + b + c;
}

var result3 = unaSuma(1, 2, 3);
console.log(result3);
*/

//funciones recursivas
/* factorial de 4 = 1*2*3*4*5 

function factorial(n) {

	if ((n == 0) || (n == 1))
		return 1;
	else
		return (n * (factorial(n - 1)));
	

}

console.log(factorial(5));
*/

/*
 * Funciones PREDEFINIDAS */


/* Arreglos
var nombres = ['Juan', 'Pepe', 'Agustina', 'Maria'];
var vegetales = new Array('Tomate', 'Cebolla', 'Huevo');

console.log(nombres[3]);
console.log(nombres[5]); //undefined
console.log(vegetales[1]);

nombres[0] = 'Juan Marcelo'; //modifico una posicion del array
vegetales[2] = 'Huevo Babe';

console.log(nombres[0]); 
console.log(vegetales[2]);

//recorro el array 
for (var i = 0; i <= nombres.length - 1; i++) {
	console.log(nombres[i]);
}

//otra manera de recorrer el array es con el metodo FOREACH propio de la clase Array
vegetales.forEach(function (elemento, indice) {
	console.log(elemento, indice)
})

console.log(nombres);
nombres.push('El Ruso'); //cargo un nuevo elemento en el array al final de la lista
console.log(nombres);

nombres.unshift('Lili'); //cargo un nuevo elemento en el array al principio de la lista
console.log(nombres);

nombres.shift(); //quita un nuevo elemento en el array al principio de la lista
console.log(nombres);

nombres.pop(); //quita el ultimo elemento de la lista
console.log(nombres);

var pos = nombres.indexOf('Maria'); //retorna el indice del elemento buscado
console.log(pos);

nombres.splice(1,2) //elimina (A,B) desde el INDICE A, B elementos
console.log(nombres);

*/

console.log('GIT 1');