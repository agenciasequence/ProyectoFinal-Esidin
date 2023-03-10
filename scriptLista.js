//DECLARAMOS VARIABLES

let filtHum = document.getElementById("filtHum")
let filtElf = document.getElementById("filtElf")
let filtEn = document.getElementById("filtEn")
let filtOrc = document.getElementById("filtOrc")
let filtBarb = document.getElementById("filtBarb")
let filtGue = document.getElementById("filtGue")
let filtExp = document.getElementById("filtExp")
let filtMag = document.getElementById("filtMag")
let botonLista = document.getElementById("botonLista")
let botonLvl0 = document.getElementById("lvl0")
let botonLvl1 = document.getElementById("lvl1")

//FUNCIONES PARA MOSTRAR Y FILTRAR PJS CREADOS

function mostrarPjs(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    

    
    for (const personaje of pjsRecuperados) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje.nombre

        containerLista.append(renderLista)



    }

}

function mostrarHumanos(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.raza == "Humano")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarElfos(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroElfos = pjsRecuperados.filter((personaje) => personaje.raza == "Elfo")
    const elfos = filtroElfos.map((personaje) => personaje.nombre)
    
    for (const personaje of elfos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarEnanos(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.raza == "Enano")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarOrcos(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.raza == "Semiorco")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarBarb(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.clase == "B??rbaro")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarGue(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.clase == "Guerrero")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarExp(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.clase == "Explorador")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

function mostrarMag(){

    
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }
    
    
    const filtroHumanos = pjsRecuperados.filter((personaje) => personaje.clase == "Mago")
    const humanos = filtroHumanos.map((personaje) => personaje.nombre)
    
    for (const personaje of humanos) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje

        containerLista.append(renderLista)



    }

}

// FUNCIONES PARA HECHIZOS

function mostrarSpell0() {
fetch("./spellslvl0.json")
.then(respuesta => respuesta.json())
.then(hechizos => mostrarHechizo(hechizos))
.catch(Swal.fire({
    icon: 'error',
    title: 'ERROR',
    text: 'Recargue la p??gina e int??ntelo de nuevo',
    
  }))
}

function mostrarSpell1() {
    fetch("./spellslvl1.json")
    .then(respuesta => respuesta.json())
    .then(hechizos => mostrarHechizo(hechizos))
    .catch(Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Recargue la p??gina e int??ntelo de nuevo',
        
      }))
    }

function mostrarHechizo(hechizos) {
    let containerLista = document.getElementById("hojaMain2")
    
    if (containerLista.firstChild){
        containerLista.innerHTML = ""
    }

    for (const hechizo of hechizos ) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = hechizo

        containerLista.append(renderLista)
    }
}

//BOTONES


botonLista.addEventListener("click", mostrarPjs)
filtHum.addEventListener("click", mostrarHumanos)
filtElf.addEventListener("click", mostrarElfos)
filtEn.addEventListener("click", mostrarEnanos)
filtOrc.addEventListener("click", mostrarOrcos)
filtBarb.addEventListener("click", mostrarBarb)
filtGue.addEventListener("click", mostrarGue)
filtExp.addEventListener("click", mostrarExp)
filtMag.addEventListener("click", mostrarMag)
botonLvl0.addEventListener("click", mostrarSpell0)
botonLvl1.addEventListener("click", mostrarSpell1)

