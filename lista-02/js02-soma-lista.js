/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             40
 */

// Entrada

function somarLista(lista) {
  soma = 0;
  lista.forEach(function (numero) {
    soma += numero;
  });
  console.log(soma);
}

var entrada_1 = [1, 3, 5, 7, 8, 10];
var entrada_2 = [1, 1, 40];
var soma = 0;

somarLista(entrada_1);
somarLista(entrada_2);
