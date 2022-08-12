/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbduf           abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const criptografia = [
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
];

let texto = "zebra";
let texto_criptografado = "";

let posicao = 0; //retorna a posição da letra original

function criptografarMensagem(texto) {
  texto_criptografado = "";

  for (let i in texto) {
    posicao = alfabeto.indexOf(texto[i]);
    texto_criptografado += criptografia[posicao];
  }
  return texto_criptografado;
}

function descriptografarMensagem(criptografado) {
  texto_criptografado = "";
  for (let i in criptografado) {
    posicao = criptografia.indexOf(criptografado[i]);
    texto_criptografado += alfabeto[posicao];
  }
  return texto_criptografado;
}

console.log(criptografarMensagem(texto));

texto_criptografado = criptografarMensagem(texto);
console.log(descriptografarMensagem(texto_criptografado));
