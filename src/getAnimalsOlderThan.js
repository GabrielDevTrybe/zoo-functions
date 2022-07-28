const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const encontraEspecies = species.find((animais) => animais.name === animal);
  return encontraEspecies.residents.every((animals) => animals.age >= age);
}

console.log(getAnimalsOlderThan('lions', 12));

module.exports = getAnimalsOlderThan;
