/**
 * Faça um Programa que inverta um texto.
 *
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 *
 */

// Entrada
let texto = "abacate";
let invertido = "";
i = texto.length;

while (i > 0) {
  invertido += texto[i - 1];
  i--;
}

console.log(invertido);
