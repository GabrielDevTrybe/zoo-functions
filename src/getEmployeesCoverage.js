const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const personAndId = employees.map((obj) => {
  const arr = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: obj.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: obj.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return arr;
});

function getEmployeesCoverage(param) {
  if (!param) {
    return personAndId;
  }

  console.log(getEmployeesCoverage());

  const validate = personAndId
    .find((e) => e.fullName.includes(Object.values(param))
      || e.id.includes(Object.values(param)));
  if (!validate) {
    throw new Error('Informações inválidas');
  }
  return validate;
}

module.exports = getEmployeesCoverage;
