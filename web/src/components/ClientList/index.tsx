import axios from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../constants"
import { Edit, PersonDelete } from "../../icons"
import { queryClient } from "../../services/queryClient"
import { Table } from "./styles"

export interface Cliente {
  id: number
  nome: string
  endereco: string
  modelo: string
  telefone: string
  data_entrega: string
  data_despacho: string
}

const ClientList: React.FC = () => {
  const navigate = useNavigate()

  const { isLoading, data: clientes } = useQuery<Cliente[]>("clientes", async () => {
    const res = await fetch(`${baseURL}/clientes`)
    return res.json()
  })

  async function handleDeleteClick(id: number) {
    try {
      await axios.delete(`${baseURL}/cliente/${id}`)
      await queryClient.invalidateQueries("clientes")
    } catch (error: any) {
      alert(error.response.data.sqlMessage)
    }
  }

  function handleEditClick(id: number) {
    navigate(`/cliente/${id}/edit`)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>nome</th>
          <th>endereco</th>
          <th>modelo</th>
          <th>telefone</th>
          <th>data entrega</th>
          <th>data despacho</th>
        </tr>
      </thead>
      <tbody>
        {clientes?.map((cliente) => {
          return (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.modelo}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.data_entrega}</td>
              <td>{cliente.data_despacho}</td>
              <td className="icons">
                <div className="icon edit" onClick={() => handleEditClick(cliente.id)}>
                  <Edit width={18} />
                </div>
                <div className="icon delete" onClick={() => handleDeleteClick(cliente.id)}>
                  <PersonDelete width={18} />
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ClientList
