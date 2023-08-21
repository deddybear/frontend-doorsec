import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import web from "./routes/web"
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
        <ChakraProvider>
            <RouterProvider router={web} />
        </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
