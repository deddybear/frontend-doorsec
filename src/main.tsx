import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import pages from "./routes/pages"
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
        <RouterProvider router={pages} />
    </ChakraProvider>
  </React.StrictMode>,
)
