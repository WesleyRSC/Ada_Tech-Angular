export class Conta {
  private Titular: string | undefined;
  private Saldo: number = 0;
  private ContaAtiva: boolean = false;

  public get titular(): string {
    return this.Titular!;
  }

  public get saldo(): number {
    return this.Saldo;
  }

  public get contaAtiva(): boolean {
    return this.ContaAtiva;
  }

  constructor(titular: string) {
    if (!this.validarTitular(titular)) {
      console.log("Nome do titular inválido");
    } else {
      this.Titular = titular;
      this.Saldo = 0;
      this.ContaAtiva = true;

      console.log(`Conta criada com sucesso!\nBem vindo ${this.Titular}`);
    }
  }

  private validarTitular(titular: string): boolean {
    if (titular.length < 4) {
      return false;
    }

    if (/\d/.test(titular)) {
      return false;
    }

    return true;
  }

  ativarConta(): boolean {
    if (!this.ContaAtiva) {
      this.ContaAtiva = true;
      return true;
    } else return false;
  }

  inativarConta(): boolean {
    if (this.ContaAtiva) {
      if (this.Saldo > 0) {
        console.log(
          "O Saldo não pode ser maior que zero para inativar uma conta"
        );
        return false;
      }
      this.ContaAtiva = false;
      return true;
    }
    return false;
  }

  depositar(valor: number) {
    if (!this.contaAtiva) {
      console.log("Conta não está ativa");
      return;
    }

    if (valor <= 0) {
      console.log("Digite um valor numérico válido para deposito");
      return;
    }

    this.Saldo += valor;
  }

  sacar(valor: number) {
    if (!this.contaAtiva) {
      console.log("Conta não está ativa");
      return;
    }

    if (valor <= 0) {
      console.log("Digite um valor numérico válido para o saque");
      return;
    }

    if (valor > this.Saldo) {
      console.log("Valor de saque é maior que o saldo");
      return;
    }
    
    this.Saldo -= valor;
  }

  obterSaldo(): number {
    return this.Saldo;
  }

  toString() {
    return `Titular: ${this.Titular} - Saldo: ${this.Saldo} - Estado: ${
      this.ContaAtiva ? "Ativa" : "Inativa"
    }`;
  }
}
