import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/home/home"
import "@assets/styles/styles.scss"
import AppProvider from "./contexts/app-context"

const App = () => {

  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)