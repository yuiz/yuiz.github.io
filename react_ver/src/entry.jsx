import React from "react"
import ReactDOM from "react-dom/client"

import Main from "./components/Main.jsx";

import "./css/syle.css";
import "./css/syle_short.css";

window.onload = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
}
