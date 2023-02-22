import ClientList from "../../../components/ClientList";
import Form from "../../../components/Form";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Form />
      <ClientList />
    </Container>
  );
}

export default Home;