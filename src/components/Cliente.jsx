function Cliente({ nome, email, telefone }) {
  return (
    <div className="cliente">
      <h3>{nome}</h3>

      <p>E-mail: {email}</p>

      <p>Telefone: {telefone}</p>
    </div>
  )
}

export default Cliente