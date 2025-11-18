function saldo(win, lose) {
  return win - lose;
}
let resultado = saldo(150, 30);
if (resultado < 10) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível FERRO");
} else if (resultado >= 11 && resultado <= 20) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível BRONZE");
} else if (resultado >= 21 && resultado <= 50) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível PRATA");
} else if (resultado >= 51 && resultado <= 80) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível OURO");
} else if (resultado >= 81 && resultado <= 90) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível DIAMANTE");
} else if (resultado >= 91 && resultado <= 100) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível LENDÁRIO");
} else if (resultado > 100) {
  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível IMORTAL");
}