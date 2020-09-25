const express = require('express');
const app = express();

let series = [ 
    {
        id:1,
        serie: 'Friends'
    },
    {
        id:2,
        serie: 'This is us'
    },
    {
        id: 3,
        serie: 'Umbrella Academy'
    }
]

app.listen(3000)
app.get('/serie/:id', (req, res) => {
    let idFilme = series.find((serie) => {
        let {id} = req.params
        return serie.id == id
    })
    res.send(idFilme.serie)
})

