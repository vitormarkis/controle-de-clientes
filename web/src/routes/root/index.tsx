import { Outlet } from "react-router-dom"
import Layout from "../../components/Layout"

import { Container } from "./styles"

function Home() {

  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default Home
