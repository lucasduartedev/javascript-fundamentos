
// * filter - percorre o array e retorna um novo array com a quantidade de elementos filtrados
// * usado para filtrar elementos de um array

let frutas: string[] = ['maça', 'banana', 'laranja', 'uva', 'abacaxi'];

let frutasFiltradas = frutas.filter((fruta) => fruta.startsWith('a'));
console.log(`Começa com a letra 'a': ${frutasFiltradas}`);

let contemLetraN = frutas.filter((fruta) => fruta.includes('n')).join(', ');
console.log(`Contém a letra 'n': ${contemLetraN}`);
