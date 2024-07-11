import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Prod} from "./routes/Prod.jsx"
import {RickApi} from './routes/RickApi.jsx'
import {Map} from './routes/Map.jsx'
import { Graphics } from './routes/Graphics.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { imageOverlay } from 'leaflet'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Prod />,
  },

  {
    path: "/rick",
    element: <RickApi />,
  },

  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/graph",
    element: <Graphics />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
