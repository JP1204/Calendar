import React from "react"
import {Link} from "react-router-dom"

function MyNavbar() {
    return (
        <nav className = "navbar navbar-expand-sm bg-dark navbar-dark" style={{height: "10vh"}}>
            <Link to={"/"} className="navbar-brand">Home</Link>
            <Link to={"/todo"} className="navbar-brand">Todo</Link>
            <Link to={"/calendar"} className="navbar-brand">Calendar</Link>
        </nav>
    )
}

export default MyNavbar