/**
 * Faça um programa que dado o ano de nascimento, mostre a idade!
 *
 * Tarefa:
 * - pesquise como pegar o ano atual em JS
 * - altere a expressão da var idade para usar o ano atual
 * - use node para rodar este script js
 *   $ node lista-01/js01-calcula-idade.js
 *   👉 Quem nasceu em 2002, sua idade é 20
 *  - altere a variável para outros anos e verifique se a resposta está correta
 *
 * IMPORTANTE:
 * - Não precisa obter do usuário os dados de entrada
 * - Não precisa fazer uma página web para obter os dados
 * - Apenas alterar o valor da variável para diferentes valores e testar
 *   a lógica do programa
 */

let ano_nascimento = 2002;

let idade = 2022 - ano_nascimento;

console.log(`Você nasceu em ${ano_nascimento} e tem ${idade} anos.`);
