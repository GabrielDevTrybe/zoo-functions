const data = require('../data/zoo_data');

function countAnimals(animal) {
  const quantidadeAnimais = data.species.map((allSpecies) => `Especies: ${allSpecies.name},
Quantidade: ${allSpecies.residents.length}`);
  if (!animal) {
    return Object.assign(quantidadeAnimais);
  }

  return data.species.find((qtd) => qtd.name === animal).residents.length;
}
console.log(countAnimals());
module.exports = countAnimals;
