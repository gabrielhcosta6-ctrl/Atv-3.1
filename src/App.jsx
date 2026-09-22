import { useState } from "react"

import Titulo from "./components/Titulo"
import Produto from "./components/Produto"
import Cliente from "./components/cliente"
import FormularioCliente from "./components/FormularioCliente"
import "./App.css"
function App() {
  // PRODUTOS
  const [produtos, setProdutos] = useState([])

  const [novoNome, setNovoNome] = useState("")
  const [novaCategoria, setNovaCategoria] = useState("")
  const [novoPreco, setNovoPreco] = useState("")

  // CLIENTES
  const [clientes, setClientes] = useState([])

  const [novoCliente, setNovoCliente] = useState("")
  const [novoEmail, setNovoEmail] = useState("")
  const [novoTelefone, setNovoTelefone] = useState("")

  function adicionarProduto() {
    if (novoNome.trim() === "") return
    if (novaCategoria.trim() === "") return
    if (novoPreco.trim() === "") return

    const novoProduto = {
      nome: novoNome,
      categoria: novaCategoria,
      preco: novoPreco
    }

    setProdutos([...produtos, novoProduto])

    setNovoNome("")
    setNovaCategoria("")
    setNovoPreco("")
  }

  function adicionarCliente() {
    if (novoCliente.trim() === "") return
    if (novoEmail.trim() === "") return
    if (novoTelefone.trim() === "") return

    const novoCadastro = {
      nome: novoCliente,
      email: novoEmail,
      telefone: novoTelefone
    }

    setClientes([...clientes, novoCadastro])

    setNovoCliente("")
    setNovoEmail("")
    setNovoTelefone("")
  }

  return (
    <div className="pagina">

      <Titulo />

      {/* PRODUTOS */}
      <section className="secao">
        <h2>Produtos</h2>

        <div className="formulario">
          <input
            placeholder="Adicionar Nome"
            value={novoNome}
            onChange={(evento) => setNovoNome(evento.target.value)}
          />

          <input
            placeholder="Adicionar Categoria"
            value={novaCategoria}
            onChange={(evento) => setNovaCategoria(evento.target.value)}
          />

          <input
            placeholder="Adicionar Preço"
            value={novoPreco}
            onChange={(evento) => setNovoPreco(evento.target.value)}
          />

          <button onClick={adicionarProduto}>
            Adicionar Produto
          </button>
        </div>

        <div className="lista">
          {produtos.map((produto, index) => (
            <Produto
              key={index}
              nome={produto.nome}
              categoria={produto.categoria}
              preco={produto.preco}
            />
          ))}
        </div>
      </section>

      {/* CLIENTES */}
      <section className="secao">
        <h2>Clientes</h2>

        <FormularioCliente
          novoCliente={novoCliente}
          setNovoCliente={setNovoCliente}
          novoEmail={novoEmail}
          setNovoEmail={setNovoEmail}
          novoTelefone={novoTelefone}
          setNovoTelefone={setNovoTelefone}
          adicionarCliente={adicionarCliente}
        />

        <div className="lista">
          {clientes.map((cliente, index) => (
            <Cliente
              key={index}
              nome={cliente.nome}
              email={cliente.email}
              telefone={cliente.telefone}
            />
          ))}
        </div>
      </section>

    </div>
  )
}

export default App