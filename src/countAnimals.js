const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const objeto = (specie) => specie.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) return objeto(species);

  const encontraEspecie = data.species.find((e) => e.name === animal.specie);
  const residentes = encontraEspecie.residents.length;

  if (!animal.sex) {
    return residentes;
  }
  return encontraEspecie.residents.filter((e) => e.sex === animal.sex).length;
}

console.log(countAnimals());

module.exports = countAnimals;
