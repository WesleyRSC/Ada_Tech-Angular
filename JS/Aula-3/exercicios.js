//LAÇOS
//Utilizando for FOR

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = returnSeparatedLists(lista);

console.log(result);

function returnSeparatedLists(lista) {
  let listaImpar = [];
  let listaPar = [];

  for (let index = 0; index < lista.length; index++) {
    if (lista[index] % 2 == 0) listaPar.push(lista[index]);
    else listaImpar.push(lista[index]);
  }
  return { listaImpar: listaImpar, listaPar: listaPar };
}
