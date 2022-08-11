/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA          SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
let texto = " ";

texto = texto.toLowerCase();

if (
  texto == "yes" ||
  texto == "y" ||
  texto == "s" ||
  texto == "sim" ||
  texto == 1
) {
  console.log("true");
} else {
  console.log("false");
}
