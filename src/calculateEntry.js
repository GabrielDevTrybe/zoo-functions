const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((resultadoParcial, nomeAtual) => {
    if (resultadoParcial[nomeAtual] === undefined) {
      resultadoParcial[nomeAtual] = 1;
    } else {
      resultadoParcial[nomeAtual] += 1;
    }
    return resultadoParcial;
  });
}

function calculateEntry(entrants) {

}

module.exports = { calculateEntry, countEntrants };
