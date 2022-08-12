/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]        5.7
 * [1,1,40]             14.0
 */

// Entrada
var entrada_1 = [1, 3, 5, 7, 8, 10];
var entrada_2 = [1, 1, 40];
var soma = 0;
let media = 0;

function calcularMediaElementos(lista) {
  soma = 0;

  lista.forEach(function (elemento) {
    soma += elemento;
  });
  media = soma / lista.length;
  return media.toFixed(1);
}

media = calcularMediaElementos(entrada_1);
console.log(` A média das entradas é ${media}.`);

media = calcularMediaElementos(entrada_2);
console.log(` A média das entradas é ${media}.`);
