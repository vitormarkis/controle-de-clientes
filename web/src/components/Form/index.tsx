import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"
import { baseURL } from "../../constants"
import { queryClient } from "../../services/queryClient"
import { formatData } from "../../utils"
import { Button, Container, Fieldset, Input, Label, Legend } from "./styles"

export interface CadastroCliente {
  nome: string
  endereco: string
  modelo: string
  telefone: string
  data_entrega: string
  data_despacho: string
}

const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<CadastroCliente>()
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler: SubmitHandler<CadastroCliente> = async (fieldsData) => {
    try {
      
      const formatedData = formatData(fieldsData)
      
      setIsSubmitting(true)

      await axios.post(`${baseURL}/clientes`, formatedData)
      await queryClient.invalidateQueries("clientes")

      reset()

      
    } catch (error: any) {
      alert(error.response.data.sqlMessage)
    }
    setIsSubmitting(false)
  }

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

        <Button type="submit" disabled={isSubmitting} >Enviar</Button>
      </Fieldset>
    </Container>
  )
}

export default Form
