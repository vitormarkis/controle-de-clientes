import mysql from "mysql2"

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ike_informatica",
})

connection.connect(error => {
  if (error) throw error
  console.log("Conectado ao banco de dados com sucesso!")
})
