/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 *
 */

// Entrada
// Pŕoxima volta

// Saída com base na próxima folga, calcular dia de trabalho/folga

function adicionaDias(data_inicial, n_dias) {
  var resultado = new Date(data_inicial);
  resultado.setDate(resultado.getDate() + n_dias);
  return resultado;
}

var lista_folga = [];

for (let i = 1; i <= 90; i++) {
  if (i % 7 == 0 || i % 8 == 0) {
    console.log(adicionaDias("2022-08-12", i));
  }
}
