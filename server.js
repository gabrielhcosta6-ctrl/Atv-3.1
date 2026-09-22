const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

// GET - buscar clientes
app.get("/clientes", (req, res) => {

  const sql = "SELECT * FROM cliente"

  db.query(sql, (erro, resultado) => {

    if (erro) {
      console.log(erro)

      return res.status(500).json({
        mensagem: "Erro ao buscar clientes"
      })
    }

    res.json(resultado)
  })
})

// POST - cadastrar cliente
app.post("/clientes", (req, res) => {

  const { nome, email, telefone } = req.body

  const sql = `
    INSERT INTO cliente (nome, email, telefone)
    VALUES (?, ?, ?)
  `

  db.query(
    sql,
    [nome, email, telefone],
    (erro, resultado) => {

      if (erro) {
        console.log(erro)

        return res.status(500).json({
          mensagem: "Erro ao cadastrar cliente"
        })
      }

      res.status(201).json({
        mensagem: "Cliente cadastrado com sucesso"
      })
    }
  )
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})