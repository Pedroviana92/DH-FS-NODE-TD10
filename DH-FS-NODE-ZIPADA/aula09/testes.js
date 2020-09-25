series = [
    {
        nome: 'Breaking Bad',
        genero: 'Ação e suspense',
        ano: 2013,
        id: 1
    },
    {
        nome: 'Friends',
        genero: 'Comédia',
        ano: 2004,
        id: 2
    },
    {
        nome: 'This is us',
        genero: 'Drama',
        ano: 2016,
        id: 3
    }
]

let encontre = series.find((serie) => {
    return serie.id > 2
})
let busca = series.find((serie) => {
    let id = 1
    return serie.id == id
})

// console.log(encontre.nome)
console.log(busca)