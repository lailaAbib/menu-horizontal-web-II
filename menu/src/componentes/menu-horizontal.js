import React from "react"
import "./menu-horizontal.css"

export default function Menu(){
    return(
    <div>
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><a href = "#inicio">Nosso Canal</a></li>
                    <li><a href = "#cursos">Cursos</a></li>
                    <li><a href = "#contatos">Contatos</a></li>
                    <li><a href = "#missao">Missão</a></li>
                    <li><a href = "#sobre">Sobre</a></li>

                </ul>
            </nav>

            <section id="inicio">
                <h1>Inicio</h1>
            </section>

            <section id="cursos">
                <h1>cursos</h1>
            </section>

            <section id="contatos">
                <h1>contatos</h1>
            </section>

            <section id="missao">
                <h1>missão</h1>
            </section>

            <section id="sobre">
                <h1>sobre</h1>
            </section>
        </div>
    </div>
    )
}