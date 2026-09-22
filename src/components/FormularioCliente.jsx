function FormularioCliente({
  novoCliente,
  setNovoCliente,
  novoEmail,
  setNovoEmail,
  novoTelefone,
  setNovoTelefone,
  adicionarCliente
}) {

  function cadastrarCliente() {

    if (novoCliente.trim() === "") return
    if (novoEmail.trim() === "") return
    if (novoTelefone.trim() === "") return

    const cliente = {
      nome: novoCliente,
      email: novoEmail,
      telefone: novoTelefone
    }

    fetch("http://localhost:3000/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cliente)
    })

    // Atualiza a lista na tela
    adicionarCliente()
  }

  return (
    <div className="formulario">

      <input
        placeholder="Nome"
        value={novoCliente}
        onChange={(evento) => setNovoCliente(evento.target.value)}
      />

      <input
        placeholder="E-mail"
        value={novoEmail}
        onChange={(evento) => setNovoEmail(evento.target.value)}
      />

      <input
        placeholder="Telefone"
        value={novoTelefone}
        onChange={(evento) => setNovoTelefone(evento.target.value)}
      />

      <button onClick={cadastrarCliente}>
        Cadastrar cliente
      </button>

    </div>
  )
}

export default FormularioCliente