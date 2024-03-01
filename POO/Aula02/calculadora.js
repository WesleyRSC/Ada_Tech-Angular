class calculadora {
  primeiroNumero = null;
  segundoNumero = null;
  operacao = null;
  resultado = 0;

  constructor(num1, num2, operation) {
    let int1 = Number.parseInt(num1);
    let int2 = Number.parseInt(num2);

    if (this.ValidarInteiros(num1, num2)) {
      this.primeiroNumero = num1;
      this.segundoNumero = num2;

      switch (operation.toUpperCase()) {
        case "SOMA":
          this.Somar();
          break;
        case "SUBTRACAO":
          this.Subtrair();
          break;
        case "MULTIPLICACAO":
          this.Multiplicar();
          break;
        case "DIVISAO":
          if (this.segundoNumero == 0) {
            console.log("O segundo numero não pode ser igual a zero");
          } else this.Dividir();
          break;
        default:
          console.log("Selecione uma operação válida");
          break;
      }
    }
  }

  ValidarInteiros(num1, num2) {
    if (num1 == NaN || num2 == NaN) {
      console.log("Algum dos numeros informados não são inteiros válidos");
      return false;
    }
    return true;
  }

  Somar() {
    this.resultado = this.primeiroNumero + this.segundoNumero;
  }

  Subtrair() {
    this.resultado = this.primeiroNumero - this.segundoNumero;
  }

  Multiplicar() {
    this.resultado = this.primeiroNumero * this.segundoNumero;
  }

  Dividir() {
    this.resultado = this.primeiroNumero / this.segundoNumero;
  }
}

let calculo = new calculadora(5, 12, "MULTIPLICACAO");
console.log(calculo.resultado);
