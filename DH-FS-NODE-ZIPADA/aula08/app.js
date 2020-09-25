const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {"Content.type": "text/plain"})

      switch(req.url){
          case '/': 
             res.end('você está na página home')
             break
          case '/contato':
              res.end('você está na página de contatos')
              break
          default:
              res.end("Endereço inválido!")
      }
      
}).listen(3030, () => {
    console.log('servidor está rodando')
})
