const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function listDay(day) {
  if (day === 'Monday') {
    const objFechado = {
      [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },

    };
    return objFechado;
  }
  const availability = species.filter((dias) => dias.availability
    .includes(day)).map((animals) => animals.name);
  const newObj = {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: availability,
    },
  };
  return newObj;
}

function listAll() {
  const hoursKeys = Object.keys(hours);
  return hoursKeys.reduce((acc, curr) => {
    Object.assign(acc, listDay(curr));
    return acc;
  }, {});
}
console.log(listAll());

function getSchedule(scheduleTarget) {
  const verifica = species.some((e) => e.name === scheduleTarget);
  const hoursKeys = Object.keys(hours);
  if (hoursKeys.includes(scheduleTarget)) {
    return listDay(scheduleTarget);
  } if (!scheduleTarget || !verifica) {
    return listAll();
  }

  return data.species.find((animal) => animal.name === scheduleTarget).availability;
}

// it('sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis', () => {
//   const actual = getSchedule();

//   const expected = {
//     'Tuesday': {
//       'officeHour': 'Open from 8am until 6pm',
//       'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//     },
//     'Wednesday': {
//       'officeHour': 'Open from 8am until 6pm',
//       'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//     },
//     'Thursday': {
//       'officeHour': 'Open from 10am until 8pm',
//       'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
//     },
//     'Friday': {
//       'officeHour': 'Open from 10am until 8pm',
//       'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
//     },
//     'Saturday': {
//       'officeHour': 'Open from 8am until 10pm',
//       'exhibition': [
//         'lions',  'tigers',
//         'bears',  'penguins',
//         'otters', 'frogs',
//         'snakes', 'elephants',
//       ],
//     },
//     'Sunday': {
//       'officeHour': 'Open from 8am until 8pm',
//       'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
//     },
//     'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
//   };

//   expect(actual).toEqual(expected);
// });

// it('caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição', () => {
//   const actual = getSchedule('qualquercoisa');

module.exports = getSchedule;
