/**
 * Faça um Programa que imprima a soma de dois numeros (inteiros ou com casas decimais).
 * Se os valores de entrada não forem números válidos, imprima uma mensagem de aviso.
 *
 * ENTRADA                           SAÍDA
 *    10 e 20                        30
 *    40.5 e 1.5                     42
 *    40,5 e 1,5                     42
 *    A e 40                         'A' não é um número
 *    40 e A                         'A' não é um número
 *
 * DICA:
 * Para verificar se A não número use o console o node e debug isto...
 * qual é o typeof 'A'? qual o typeof 42?
 * qual é o typeof(typeof A)
 */

// Entrada
let n1 = 10;
let n2 = "7..2";
let resultado1 = "";
let resultado2 = "";
let soma = 0;

converte_n1 = Number(n1);
converte_n2 = Number(n2);

//test and convert n1 to number
if (typeof n1 === "string") {
  n1 = n1.replace(",", "");
  if (isNaN(converte_n1)) {
    resultado1 = `[${n1}] não é um número.`;
  } else {
    soma += converte_n1;
  }
}
//test if is a number
else if (typeof n1 === "number") {
  soma += converte_n1;
}
//test N2
if (typeof n2 === "string") {
  n2 = n2.replace(",", "");
  if (isNaN(converte_n2)) {
    resultado1 = `[${n2}] não é um número.`;
  } else {
    soma += converte_n2;
  }
}
//test if is a number
else if (typeof n2 === "number") {
  soma += converte_n2;
}

console.log(resultado1, resultado2, `A soma é ${soma}`);
