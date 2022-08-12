/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 *
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 *
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1, 2, 3, 4, 5, 6, 7];
let impares = 0;
let pares = 0;

entrada.forEach(function (num) {
  if (num % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
});

console.log(`ÍMPARES: ${impares} | PARES: ${pares}`);
