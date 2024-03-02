// ATIVIDADE DE POO

// REQUISITOS:
// O saldo deve ser inicializado com zero e o atributo contaAtiva como true;
// A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);
// O depositar e o sacar só poderão operar se tiver saldo disponível;
// A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;
// Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
// Faça uso de sua classe em um script;
// Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, só crie a conta caso não exista (dê feedback ao seu usuários sobre a criação ou não);

const Conta = require("./conta.js");

const contas = [];

criarConta("Wesley");
criarConta("Wesley1");


function criarConta(titular) {
  if (
    contas.length > 0 &&
    contas.findIndex((conta) => conta.nomeTitular == titular) >= 0
  ) {
    console.log("Ja existe uma conta com esse titular\n");
    return;
  } else {
    let novaConta = new Conta(titular);

    if (novaConta.titular!=undefined)
      contas.push(novaConta);
  }
}

console.log(contas.toString())

let minhaConta = contas[0];

minhaConta.depositar(20);

console.log("Saldo após deposito ", minhaConta.obterSaldo(), '\n');

minhaConta.sacar(10);

console.log("Saldo após saque ", minhaConta.obterSaldo(), '\n');

minhaConta.inativarConta();

console.log("Conta está ativa? ", minhaConta.contaAtiva, '\n');

minhaConta.ativarConta();

console.log("Conta está ativa? ", minhaConta.contaAtiva, '\n');
