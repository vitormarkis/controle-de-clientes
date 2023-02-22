import { useParams } from "react-router-dom"

function EditCliente() {
  const { id } = useParams()
  
  
  return (
    <h1>{id}</h1>
  )
}

export default EditCliente
