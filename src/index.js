import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"

function MainPage() {
    return (
        <div className="mainpage">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<MainPage />, document.getElementById("root"))