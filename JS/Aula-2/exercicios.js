// Exercicio--1

/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/
const prompt = require("prompt-sync")();

let salarioString = "dfgdfg";
let salario = parseFloat(salarioString);
console.log(salario)
if (typeof(salario) === NaN)
  console.log("\n\nSalário inválido Digite somente numeros ou .");
else {
  switch (true) {
    case salario <= 1500:

      console.log(`\n Salário Atual: R$ ${salario}\n Reajuste de 20%: R$ ${salario * 0.2}\n Novo Salário: R$ ${salario * 1.2}`);
      break;
    case salario < 1700:
      console.log(`\n Salário Atual: R$ ${salario}\n Reajuste de 15%: R$ ${salario * 0.15}\n Novo Salário: R$ ${salario * 1.15}`);

      break;
    case salario < 2000:
      console.log(`\n Salário Atual: R$ ${salario}\n Reajuste de 10%: R$ ${salario * 0.1}\n Novo Salário: R$ ${salario * 1.1}`);

      break;
    default:
        console.log(`\n Salário Atual: R$ ${salario}\n Reajuste de 5%: R$ ${salario * 0.05}\n Novo Salário: R$ ${salario * 1.05}`);
      break;
  }
}
