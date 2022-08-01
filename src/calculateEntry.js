const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrantss = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((childAge) => childAge.age < 18);
  const adult = entrants.filter((adultAge) => adultAge.age >= 18 && adultAge.age < 50);
  const senior = entrants.filter((seniorAge) => seniorAge.age >= 50);
  const newObj = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return newObj;
}
console.log(countEntrants(entrantss));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const chamaFunction = countEntrants(entrants);
  const calculaChild = chamaFunction.child * prices.child;
  const calculaAdult = chamaFunction.adult * prices.adult;
  const calculaSenior = chamaFunction.senior * prices.senior;
  const soma = calculaChild + calculaAdult + calculaSenior;
  return soma;
}
console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };

// passos
// 1 - fazer um filter pra pegar a quantidade de length da idade < 18
// 2 - fazer um filter pra pegar a quantidade de length idade >= 18 e < 50
// 3 - fazer um filter pra retornar a quantidade de length da idade >=50
// 4 - retornar um objeto com as variaveis dentro
