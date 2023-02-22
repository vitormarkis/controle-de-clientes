import ClientList from "../ClientList"
import Form from "../Form"
import { Container } from "./styles"

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Form />
      <ClientList />
    </Container>
  )
}

export default Dashboard
