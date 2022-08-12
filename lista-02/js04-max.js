/**
 * Faça um programa que descubra o maior número de uma lista de números
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [7,30,1,1,0,-10]       40
 */

// Entrada
var entrada = [7, 30, 1, 1, 0, -10];

var maior = 0;

maior = entrada[0];
entrada.forEach(function (numero) {
  if (numero > maior) {
    maior = numero;
  }
});

console.log(maior);
