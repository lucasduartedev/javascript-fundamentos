
let msg = (msg) => {console.log(msg)}

let map1 = new Map();

map1.set('nome', 'fulano');
map1.set('data-nasc', '1984-08-30');

// msg(map1);
// msg(`Tamanho: ${map1.size}`);

let obj1 = {
    name: 'Julia',
    idade: 20
}

let map2 = new Map(Object.entries(obj1));
msg(map2);

let precos = Object.fromEntries([
    ['Carro', 50000],
    ['bicicleta', 1500]
]);
msg(precos);

let map3 = new Map();
map3.set('maçã', 50);
map3.set('banana', 19);
map3.set('pera', 69);

let obj2 = Object.fromEntries(map1.entries())
msg(obj2);
