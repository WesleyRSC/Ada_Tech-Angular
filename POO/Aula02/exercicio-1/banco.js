// ATIVIDADE DE POO

// REQUISITOS:

// O saldo deve ser inicializado com zero e o atributo contaAtiva como true;

// A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);

// O depositar e o sacar só poderão operar se tiver saldo disponível;

// A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;

// Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
// Faça uso de sua classe em um script;

// Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, só crie a conta caso não exista (dê feedback ao seu usuários sobre a criação ou não);

class Conta {
  #NomeTitular;
  #Saldo;
  #Ativa;

  get nomeTitular() {
    return this.#NomeTitular;
  }

  get contaAtiva() {
    return this.#Ativa;
  }

  constructor(titular) {
    if (!this.#validarTitular(titular))
      console.error("Nome do titular inválido");
    this.#NomeTitular = titular;
    this.#Saldo = 0;
    this.#Ativa = true;
  }

  #validarTitular(titular) {
    titular = "teste"
    if (titular.length < 4) {
      return false;
    }

    if (titular.contains()) {
      
    }
  }

  ativarConta() {
    if (!this.#Ativa) this.#Ativa = true;
  }

  inativarConta() {
    if (this.#Ativa) {
      this.#Ativa = false;
    }
  }

  depositar(valor) {
    if (isNaN(valor)) {
      console.log("Digite um valor numérico válido");
      return;
    }

    this.#Saldo += valor;
  }

  sacar(valor) {
    if (isNaN(valor)) {
      console.log("Digite um valor numérico válido");
      return;
    }

    if (valor > this.#Saldo) {
      console.log("Valor de saque é maior que o saldo");
      return;
    }

    this.#Saldo -= valor;
  }

  obterSaldo() {
    return this.#Saldo;
  }
}

let minhaConta = new Conta("Wesley");

console.log(
  "Conta criada com sucesso! \n Bem vindo(a) ",
  minhaConta.nomeTitular,
  "\n"
);

minhaConta.depositar(20);

console.log("Saldo após deposito ", minhaConta.obterSaldo());

minhaConta.sacar(10);

console.log("Saldo após saque ", minhaConta.obterSaldo());

minhaConta.inativarConta();

console.log("Conta está ativa? ", minhaConta.contaAtiva);

minhaConta.ativarConta();

console.log("Conta está ativa? ", minhaConta.contaAtiva);
