const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((man) => man.managers.includes(id));
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function getRelatedEmployees(managerId) {
  const eGerente = isManager(managerId);
  if (!eGerente) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((persons) => persons.managers
      .some((personTrue) => personTrue === managerId))
    .map((colaboradores) => `${colaboradores.firstName} ${colaboradores.lastName}`);
}

console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
module.exports = { isManager, getRelatedEmployees };
