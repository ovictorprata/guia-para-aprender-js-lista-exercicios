/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 *
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
let dia = 4;

switch (dia) {
  case 1:
    dia = "Domingo";
    break;
  case 2:
    dia = "Segunda";
    break;
  case 3:
    dia = "Terça";
    break;
  case 4:
    dia = "Quarta";
    break;

  case 5:
    dia = "Quinta";
    break;
  case 6:
    dia = "Sexta";
    break;
  case 7:
    dia = "Sábado";
    break;
}

console.log(dia);
