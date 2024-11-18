function sumaDeDigitos(numero) {
    let suma = 0;
    numero = numero.toString();

    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);

    return suma;



function invertirCadena(cadena)
 return cadena.split('').reverse().join('');
console.log(invertirCadena('hola'));
console.log(invertirCadena('javascript'));
console.log(invertirCadena('12345'));


function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero;
    }
}
console.log(fizzBuzz(3));    // "Fizz"


function esPalindromo(numero) {

    let numeroStr = numero.toString();


    return numeroStr === numeroStr.split('').reverse().join('');
}
console.log(esPalindromo(121)


