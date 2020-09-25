const express = require('express')
const app = express()

app.listen(3000, () => console.log(('servidor em execução')))
app.get('/', (req, res) => {
    res.send('Olá, você está na rota home. Bem-vindo!')
})

app.get('/users', (req, res) => {
    res.send('Olá, você está na lista de usuários')
})
app.get('/contato', (req, res) => {
    res.send('Olá, você está na lista de contatos')
})

app.get('/produtos/:id?', (req, res) => {
  let {id} = req.params
    res.send('Eu tenho o produto com o id:', id)
})
