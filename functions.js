const sequence = {
    _id: 1,
    get id() { return this._id++ }
}
const produtos = {};

function postProduto(produto) {
    if (!produtos.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProdutos() {
    return Object.values(produtos)
}

function getProduto(id) {
    return produtos[id] || {}
}

function upDateOne(produto) {
    produtos[produto.id] = produto
    return produto
}

function deleteOne(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}


module.exports = { getProduto, getProdutos, upDateOne, deleteOne, postProduto }