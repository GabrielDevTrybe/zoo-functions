const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const encontraPessoa = employees.find((employee) => employee.id === id);
  const encontraEspecie = encontraPessoa.responsibleFor[0];
  const encontraAnimal = species.find((animals) => animals.id === encontraEspecie);
  const maisVelho = encontraAnimal.residents.sort((a, b) => b.age - a.age)[0];

  return Object.values(maisVelho);
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
