/**
 * Faça um Programa que peça a temperatura em Fahrenheit,
 * transforme e mostre graus Celsius.
 *
 * ENTRADA              SAÍDA
 * 102                  39
 * 89                   32
 * 70                   21
 */

// Entrada
let fahrenheit = 89;
let celsius = (fahrenheit - 32) / 1.8;

console.log(`${fahrenheit} ºF = ${celsius.toFixed(0)} ºC`);
