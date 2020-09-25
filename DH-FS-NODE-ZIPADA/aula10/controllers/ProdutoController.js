const ProdutoController = {
    getProduto: (req, res) => {
        let {nome, preco, qntd, cod} = req.params
        let produtos = []
        let produto = {
             nome,
             preco,
             qntd,
             cod
        }
        produtos.push(produto)
        res.send(produtos)
    }

}
module.exports = ProdutoController