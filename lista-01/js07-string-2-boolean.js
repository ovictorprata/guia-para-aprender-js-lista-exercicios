/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
<<<<<<< HEAD
 * ENTRADA                   SAÍDA
=======
 * ENTRADA          SAÍDA
>>>>>>> 2a4b4784b78cad4deb04f78c2aae58b8bfbc333d
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
<<<<<<< HEAD

let texto = " ";

texto = texto.toLowerCase();

=======
let texto = " ";

texto = texto.toLowerCase();

>>>>>>> 2a4b4784b78cad4deb04f78c2aae58b8bfbc333d
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
