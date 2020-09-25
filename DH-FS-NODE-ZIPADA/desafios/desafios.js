const fns = require('date-fns')
const diffDias = fns.differenceInDays( 
    new Date(2020, 8, 15),
    new Date(2005, 8, 15)
)
const diffMes = fns.differenceInMonths(
    new Date(2020, 8, 15),
    new Date(2005, 8, 15)
)
console.log(diffDias)
console.log(diffMes)