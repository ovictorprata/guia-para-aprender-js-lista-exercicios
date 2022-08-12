/**
 * Faça um programa que mostre o segundo maior número da lista
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 *
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [1, 1, 40];

maior = entrada[0];
let segundoMaior = entrada[0];

entrada.forEach(function (elemento) {
  if (elemento > maior) {
    maior = elemento;
  }
});

entrada.forEach(function (elemento) {
  if (elemento >= segundoMaior && elemento < maior) {
    segundoMaior = elemento;
  }
});

console.log(maior);
console.log(segundoMaior);
