class Conta {
  #Titular;
  #Saldo;
  #ContaAtiva;

  get titular() {
    return this.#Titular;
  }

  get contaAtiva() {
    return this.#ContaAtiva;
  }

  constructor(titular) {
    if (!this.#validarTitular(titular)) {
      console.log("Nome do titular inválido");
    } else {
      this.#Titular = titular;
      this.#Saldo = 0;
      this.#ContaAtiva = true;

      console.log(`Conta criada com sucesso!\nBem vindo ${this.titular}`);
    }
  }

  #validarTitular(titular) {
    if (titular.length < 4) {
      return false;
    }

    if (/\d/.test(titular)) {
      return false;
    }

    return true;
  }

  ativarConta() {
    if (!this.#ContaAtiva) {
      this.#ContaAtiva = true;
      return true;
    } else return false;
  }

  inativarConta() {
    if (this.#ContaAtiva) {
      this.#ContaAtiva = false;
      return true;
    }
    return false;
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

  toString() {
    return `Titular: ${this.titular} - Saldo: ${this.#Saldo} - Estado: ${
      this.contaAtiva ? "Ativa" : "Inativa"
    }`;
  }
}

module.exports = Conta;
