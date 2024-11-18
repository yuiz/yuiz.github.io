import React from "react"
import ReactDOM from "react-dom/client"

import Main from "./components/Main.jsx";


window.onload = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
}
