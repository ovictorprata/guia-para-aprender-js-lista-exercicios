/**
 * Faça um programa que dado um texto de entrada, imprima o texto
 * criptografado. A criptografia inicial é bem simples,
 * apenas converta a para b, b para c e assim por diante.
 *
 * ENTRADA          SAÍDA
 * abacate          bcbdbuf
 * zebra            @fcsb
 * Zebra            $fcsb
 *
 * DICAS:
 * É uma variante do exercício js06
 * Pesquise a tabela ASCII, ai vamos ver que a = 97, que A = 65
 * (cada caracter no teclado tem uma representação numérica)
 * Pesquise os métodos de String fromCharCode que converte a para 97
 * e charCodeAt que faz 97 voltar para a
 * Assim, no podemos usar um método bem simples de criptografia que seria mudar
 * o código ASCII de forma a incrementar 1, ou seja, mudar de a para b, b para c
 * e assim por diante!
 * quando for z ou Z mudar para @ e $ respectivamente ao invés de {
 * 
 * Tarefa
 * - entenda como converter a para 97
 * - percorra o abacate para gerar os ordinais correspondente: 97,  98, 97 ...
 * - percorra a lista dos inteiros corresponde somando 1       98, 100, 98 ...
 * - percorra novamente, agora voltando para caractere          b,   c, b  ...
 *
 * IMPORTANTE:
 * - Não usar bibliotecas, basta manipular a string de entrada de forma a embaralhá-la
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

<<<<<<< HEAD
var textoCripto = 'bcbdbuf'
=======
let texto = "zebra";
let texto_criptografado = "";
>>>>>>> Lista 1 feita

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
