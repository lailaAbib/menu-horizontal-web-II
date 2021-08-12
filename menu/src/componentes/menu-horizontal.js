import React from "react"
import "./menu-horizontal.css"

export default function Menu () {
    return(
    
        <div>
        <div class="menu">
            <nav class="navmenu">
                <ul>
                    <li> <a href = "#inicio">Nosso canal</a> </li>
                    <li> <a href = "#cursos">Cursos</a> </li>
                    <li> <a href = "#contatos">Contatos</a> </li>
                    <li> <a href = "#parceiros">Parceiros</a> </li>
                    <li> <a href = "#missao">Missão</a> </li>
                    <li> <a href = "#sobre">Sobre</a> </li>
                </ul>
            </nav>

            </div>

            <section id="inicio">
                <h1>Nosso Canal</h1>

                <aside className="aside">
                    <a href="#inicio" id="inicio2">Nosso Canal</a>
                    <a href="#cursos" id="cursos2">Cursos</a>
                    <a href="#contatos" id="contatos2">Contatos</a>
                    <a href="#parceiros" id="parceiros2">Parceiros</a>
                    <a href="#missao" id="missao2">Missao</a>
                    <a href="#sobre" id="sobre2">Sobre</a>
                </aside>
            </section>

            <section id="cursos">
                <h1>Cursos</h1>
            </section>

            <section id="contatos">
                <h1>Contatos</h1>
            </section>

            <section id="parceiros">
                <h1>Parceiros</h1>
            </section>

            <section id="missao">
                <h1>Missão</h1>
            </section>

            <section id="sobre">
                <h1>Sobre</h1>
            </section>

    <a class = "irTopo" href=".menu">Topo</a>
     <a class = "irinicio" href="#inicio">Nosso Canal</a>
    <a class = "ircursos" href="#cursos">cursos</a>
    <a class = "ircontatos" href="#contatos">Contatos</a>
    <a class = "irparceiros" href="#parceiros">Parceiros</a>
    <a class = "irmissao" href="#missao">Missão</a>
    <a class = "irsobre" href="#sobre">Sobre</a> 

    <footer>
        <h2>Rodapé</h2>

    </footer>  
       
    </div>
)
}