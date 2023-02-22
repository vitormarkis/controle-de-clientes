import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { Cliente } from "../../components/ClientList"
import { baseURL } from "../../constants"
import EditClienteForm from '../../components/EditClienteForm'



function EditCliente() {
  const { id } = useParams()
  const { data: cliente, isLoading } = useQuery<Cliente>(["cliente", id], async () => {
    const res = await axios.get(`${baseURL}/cliente/${id}`)
    const user = res.data
    return user[0]
  })  
  
  if(isLoading || !cliente) {
    return <h2>Carregando...</h2>
  }
  
  return (
    <EditClienteForm cliente={cliente}/>
  )
}

export default EditCliente
