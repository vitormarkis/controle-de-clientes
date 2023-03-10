import axios from "axios"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../constants"
import { queryClient } from "../../services/queryClient"
import { formatData } from "../../utils"
import { Cliente } from "../ClientList"
import { CadastroCliente } from "../Form"
import { Button, Container, Fieldset, Input, Label, Legend } from "../Form/styles"

interface Props {
  cliente: Cliente
}

const EditClienteForm: React.FC<Props> = ({ cliente }) => {
  const { id, ...cadastroCliente } = cliente
  const navigate = useNavigate()

  // const formatedCliente = (cadastroCliente)
  const { register, handleSubmit, reset } = useForm<CadastroCliente>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitHandler: SubmitHandler<CadastroCliente> = async (fieldsData) => {
    try {
      console.log(fieldsData)
      const formatedData = formatData(fieldsData)

      setIsSubmitting(true)

      await axios.put(`${baseURL}/cliente/${cliente.id}`, formatedData)
      await queryClient.invalidateQueries(["clientes", ["cliente", cliente.id]])

      navigate(-1)
      reset()
    } catch (error: any) {
      console.error(error)
      // alert(error.response.data.sqlMessage)
    }
    setIsSubmitting(false)
  }

  useEffect(() => {
    reset(cadastroCliente)
  }, [])

  return (
    <Container onSubmit={handleSubmit(submitHandler)}>
      <Fieldset>
        <Legend>Cadastro de novo cliente</Legend>

        <Label>Nome</Label>
        <Input {...register("nome")} placeholder="João da Silva" />

        <Label>Endereço</Label>
        <Input {...register("endereco")} placeholder="Rua Bananal 265" />

        <Label>Modelo</Label>
        <Input {...register("modelo")} placeholder="Motorola Moto E4" />

        <Label>Telefone</Label>
        <Input {...register("telefone")} placeholder="51 98258-9358" />

        <Label>Data entrega</Label>
        <Input {...register("data_entrega")} type="date" placeholder="27-02-2023" />

        <Label>Data despacho</Label>
        <Input {...register("data_despacho")} type="date" placeholder="30-02-2023" />

        <Button type="submit" disabled={isSubmitting}>
          Enviar
        </Button>

        <Button type="reset" disabled={isSubmitting} onClick={() => navigate(-1)}
        style={{ backgroundColor: '#EA9010' }}
        >
          Voltar
        </Button>
      </Fieldset>
    </Container>
  )
}

export default EditClienteForm
