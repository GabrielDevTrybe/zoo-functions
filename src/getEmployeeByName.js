const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees
    .find((employ) => employ.firstName === employeeName || employ.lastName === employeeName);
}

console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
