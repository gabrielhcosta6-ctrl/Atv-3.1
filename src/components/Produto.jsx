function Produto({ nome, categoria, preco }) {
  return (
    <div className="produto">
      <h3>{nome}</h3>

      <p>Categoria: {categoria}</p>

      <p>Preço: R$ {preco}</p>
    </div>
  )
}

export default Produto