const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "empresa_db"
})

db.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar com o banco")
    return
  }

  console.log("Banco de dados conectado")
})

module.exports = db