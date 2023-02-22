import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import "./index.css"
import EditCliente from "./routes/edit-cliente"
import Home from "./routes/root"
import { queryClient } from "./services/queryClient"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/cliente/:id/edit",
        element: <EditCliente />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
