/**
 * Faça um Programa que verifique se uma letra
 * de entrada é vogal ou consoante.
 *
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
 */

// Entrada
let letra = "a";
letra = letra.toLowerCase();

if (
  letra == "a" ||
  letra == "e" ||
  letra == "i" ||
  letra == "o" ||
  letra == "u"
) {
  console.log("É vogal!");
} else {
  console.log("É consoante!");
}
