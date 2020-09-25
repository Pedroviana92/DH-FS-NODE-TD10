const moment = require('moment')


// console.log(moment().format("DD/MM/YYYY"))

//Desafio: trazer a diferença de dias e meses entre 15/09/2005 e 15/09/2020 - moment e date-fns

const presente = moment("2020-09-15")
const passado = moment("2005-09-15")
const tempo = moment.duration(presente.diff(passado))
const diferencaDias = tempo.asDays()
const diferencaMeses = tempo.asMonths()
// console.log(diferencaDias)
// console.log(diferencaMeses)

