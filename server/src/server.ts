import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import { connection } from "./services/mysql"
import { clientDates } from "./utils"

export interface Cliente {
  id: number
  nome: string
  endereco: string
  modelo: string
  telefone: string
  data_entrega: string
  data_despacho: string
}

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get("/clientes", (req, res) => {
  connection.query("SELECT * FROM clientes", (error, result) => {
    if (error) throw error
    const parsedDates = clientDates(result as Cliente[])
    return res.status(200).json(parsedDates)
  })
})

app.post("/clientes", (req, res) => {
  const [nome, endereco, modelo, telefone, data_entrega, data_despacho] = Object.values(req.body)

  connection.query(
    `
  INSERT INTO clientes 
  (nome, endereco, modelo, telefone, data_entrega, data_despacho)
  VALUES
  (?, ?, ?, ?, ?, ?)
  `,
    [nome, endereco, modelo, telefone, data_entrega, data_despacho],
    (error, result) => {
      if (error) {
        return res.status(400).json(error)
      }
      return res.status(201).json(result)
    }
  )
})

app.delete("/cliente/:id", (req, res) => {
  const { id } = req.params
  connection.query(
    `
    DELETE FROM clientes
    WHERE id = ${id}
  `,
    (error, result) => {
      if (error) {
        return res.status(400).json(error)
      }
      return res.status(201).json(result)
    }
  )
})

app.listen(3333, () => console.log("Server is running on port 3333"))
