

    

//GENERADOR DE PERSONAJES DE DUNGEONS AND DRAGONS



//Primero generamos el objeto "personaje", el array "personajes" y los personajes precargados

//CREAMOS OBJETO PERSONAJE

function personaje (nombre, raza, clase, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma, modiFuerza, modiDestreza) {
    this.nombre = nombre
    this.raza = raza
    this.clase = clase
    this.fuerza = fuerza
    this.destreza = destreza 
    this.constitucion = constitucion
    this.inteligencia = inteligencia
    this.sabiduria = sabiduria
    this.carisma = carisma
    this.modiFuerza = modiFuerza
    this.modiDestreza = modiDestreza
    }


//CREAMOS FUNCIONES PARA CARGAR ARRAY E IMPORTARLO DEL STORAGE

function cargarPjs (listapjs){
    let pjsJSON = JSON.stringify(listapjs)
    localStorage.setItem("personajes", pjsJSON)
}

function importarPjs (){
    let pjsRecuperados = localStorage.getItem("personajes")
    return pjsRecuperados
}

//FUNCIÓN PARA GENERAR HOJA DE PERSONAJE



function crearHoja (nombre, raza, clase, ataqEspada, ataqArco, dañEspada, dañArco, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma) {
    presentación = "Su personaje se llama " + nombre + " y es un " + clase + " " + raza
    ataques = "Modificador de ataque con espada: " + ataqEspada + "\n" + "Modificador de ataque con arco: " + ataqArco
    daños = "Modificador de daño con espada: " + dañEspada + "\n" + "Modificador de daño con arco: " + dañArco
    rstats = "Sus stats son:" + "\n" + "Fuerza: " + fuerza + "\n" + "Destreza: " + destreza + "\n" + "Constitución: " + constitucion + "\n" + "Inteligencia: " + inteligencia + "\n" + "Sabiduría: " + sabiduria + "\n" + "Carisma: " + carisma

    let containerPresentacion = document.getElementById("presentacionHoja")
    let containerAtaques = document.getElementById("ataquesHoja")
    let containerDaños = document.getElementById("dañosHoja")
    let containerStats = document.getElementById("statsHoja")

    if (containerPresentacion.firstChild){

    containerPresentacion.removeChild(containerPresentacion.firstChild)
    containerAtaques.removeChild(containerAtaques.firstChild)
    containerDaños.removeChild(containerDaños.firstChild)
    containerStats.removeChild(containerStats.firstChild)
    }
   
    renderPresentacion = document.createElement("h5")
    renderPresentacion.innerHTML = presentación
    renderAtaques = document.createElement("h6")
    renderAtaques.innerHTML = ataques
    renderDaños = document.createElement("h6")
    renderDaños.innerHTML = daños
    renderStats = document.createElement("h6")
    renderStats.innerHTML = rstats

    
    
    

    containerPresentacion.append(renderPresentacion)
    containerAtaques.append(renderAtaques)
    containerDaños.append(renderDaños)
    containerStats.append(renderStats)
}


//PERSONAJES PRE CARGADOS

const Jan = new personaje("Jan", "Humano", "Bárbaro",16,14,16,10,10,12,3,1)
const Korra = new personaje("Korra", "Semiorco", "Mago",8,14,16,16,10,10,-1,2)
const Adelfos = new personaje("Adelfos", "Elfo", "Explorador",8,16,14,12,14,10,-1,3)
const Esben = new personaje("Esben", "Enano", "Guerrero",8,16,14,16,12,12,-1,3)

//ARRAY DE NOMBRES Y ARRAY DE OBJETOS

const personajesNombres = [Jan.nombre + " (pregenerado)", Korra.nombre + " (pregenerado)", Adelfos.nombre + " (pregenerado)", Esben.nombre + " (pregenerado)"]
const personajes = [Jan, Korra, Adelfos, Esben]

//CONTROLAMOS SI EXISTE LOCALSTORAGE, SI NO EXISTE LO CREAMOS

if (localStorage.getItem("personajes") === null) {
    cargarPjs (personajes)
}
    
let botonSword = document.getElementById("espada")
let botonBow = document.getElementById("arco")
let boton = document.getElementById("botonGenerar")
boton.addEventListener("click", crearpj)






function statRaza(){

    let selRazaCount = document.getElementById("razaOpt").childElementCount

    if (selRazaCount > 2){
        let containerRaza = document.getElementById("razapj")
        containerRaza.removeChild(containerRaza.lastChild)
    }

    let selRaza = document.getElementById("razaOpt").value
    if (selRaza == 1){
    let containerRaza = document.getElementById("razapj")
    renderHum = document.createElement("p")
    renderHum.innerHTML = "+1 a todas las stats"

    containerRaza.append(renderHum)
    }
    if (selRaza == 2){
    let containerRaza = document.getElementById("razapj")
    renderHum = document.createElement("p")
    renderHum.innerHTML = "+2 a Destreza y +1 a Inteligencia"

    containerRaza.append(renderHum)
    }
    if (selRaza == 3){
    let containerRaza = document.getElementById("razapj")
    renderHum = document.createElement("p")
    renderHum.innerHTML = "+2 a Constitución y +1 a Sabiduría"

    containerRaza.append(renderHum)
    }
    if (selRaza == 4){
    let containerRaza = document.getElementById("razapj")
    renderHum = document.createElement("p")
    renderHum.innerHTML = "+2 a Fuerza y +1 a Constitución"

    containerRaza.append(renderHum)
    }

}



function crearpj() {
    
    Toastify({

        text: "Personaje creado exitosamente",
        
        duration: 3000
        
        }).showToast();
    
    let nombrePj = document.getElementById('nombre').value
    let claseVal = document.getElementById('claseOpt')
    let clasePersonaje = claseVal.options[claseVal.selectedIndex].text
    let razaVal = document.getElementById('razaOpt')
    let razaPersonaje = razaVal.options[razaVal.selectedIndex].text
    let fuerzaVal = document.getElementById('fuerzaOpt')
    let fuerzaPersonaje = fuerzaVal.options[fuerzaVal.selectedIndex].text
    let destrezaVal = document.getElementById('destrezaOpt')
    let destrezaPersonaje = destrezaVal.options[destrezaVal.selectedIndex].text
    let constitucionVal = document.getElementById('constitucionOpt')
    let constitucionPersonaje = constitucionVal.options[constitucionVal.selectedIndex].text
    let inteligenciaVal = document.getElementById('inteligenciaOpt')
    let inteligenciaPersonaje = inteligenciaVal.options[inteligenciaVal.selectedIndex].text
    let sabiduriaVal = document.getElementById('sabiduriaOpt')
    let sabiduriaPersonaje = sabiduriaVal.options[sabiduriaVal.selectedIndex].text
    let carismaVal = document.getElementById('carismaOpt')
    let carismaPersonaje = carismaVal.options[carismaVal.selectedIndex].text

    if (razaPersonaje == "Humano"){
        fuerzaPersonaje = parseInt(fuerzaPersonaje) + 1
        destrezaPersonaje = parseInt(destrezaPersonaje) + 1
        constitucionPersonaje = parseInt(constitucionPersonaje) + 1
        inteligenciaPersonaje = parseInt(inteligenciaPersonaje) + 1
        sabiduriaPersonaje = parseInt(sabiduriaPersonaje) + 1
        carismaPersonaje = parseInt(carismaPersonaje) + 1
    }

    if (razaPersonaje == "Elfo"){
        destrezaPersonaje = parseInt(destrezaPersonaje) + 2
        inteligenciaPersonaje = parseInt(inteligenciaPersonaje) + 1
        
    }

    if (razaPersonaje == "Enano"){
        constitucionPersonaje = parseInt(constitucionPersonaje) + 2
        sabiduriaPersonaje = parseInt(sabiduriaPersonaje) + 1
        
    }

    if (razaPersonaje == "Semiorco"){
        constitucionPersonaje = parseInt(constitucionPersonaje) + 1
        fuerzaPersonaje = parseInt(fuerzaPersonaje) + 1
        
    }

    
    let preModFuerza = (parseInt(fuerzaPersonaje) - 10) / 2
    let modFuerza = Math.floor(preModFuerza)
    let preModDestreza = (parseInt(destrezaPersonaje) - 10) / 2
    let modDestreza = Math.floor(preModDestreza)
    let ataqueEspada = modFuerza + 2
    let ataqueArco = modDestreza + 2
    let dañoEspada = "dado de 8 + " + modFuerza
    let dañoArco = "dado de 8 + " + modDestreza

    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    const pjsLocales = []
    for (let i = 0; i < pjsRecuperados.length; i++) {
        const pjnew = new personaje (pjsRecuperados[i].nombre, pjsRecuperados[i].raza, pjsRecuperados[i].clase, pjsRecuperados[i].fuerza, pjsRecuperados[i].destreza, pjsRecuperados[i].constitucion, pjsRecuperados[i].inteligencia, pjsRecuperados[i].sabiduria, pjsRecuperados[i].carisma, pjsRecuperados[i].modiFuerza, pjsRecuperados[i].modiDestreza)
        pjsLocales.push(pjnew)
    }

    

    if (pjsLocales !== personajes){
    
    const pjnuevo = new personaje (nombrePj, razaPersonaje, clasePersonaje, fuerzaPersonaje, destrezaPersonaje, constitucionPersonaje, inteligenciaPersonaje, sabiduriaPersonaje, carismaPersonaje, modFuerza, modDestreza)
    
    personajesNombres.push(pjnuevo.nombre)
    pjsLocales.push(pjnuevo)
    cargarPjs (pjsLocales)
    crearHoja (nombrePj, razaPersonaje, clasePersonaje, ataqueEspada, ataqueArco, dañoEspada, dañoArco, fuerzaPersonaje, destrezaPersonaje, constitucionPersonaje, inteligenciaPersonaje, sabiduriaPersonaje, carismaPersonaje)
    botonSword.addEventListener("click", function () {ataqueEsp(modFuerza)})
    botonBow.addEventListener("click", function () {ataqueArc(modDestreza)})
    }else {
    
    
    const pjnuevo = new personaje (nombrePj, razaPersonaje, clasePersonaje, fuerzaPersonaje, destrezaPersonaje, constitucionPersonaje, inteligenciaPersonaje, sabiduriaPersonaje, carismaPersonaje, modFuerza, modDestreza)
    
    personajesNombres.push(pjnuevo.nombre)
    personajes.push(pjnuevo)
    cargarPjs (personajes)
    crearHoja (nombrePj, razaPersonaje, clasePersonaje, ataqueEspada, ataqueArco, dañoEspada, dañoArco, fuerzaPersonaje, destrezaPersonaje, constitucionPersonaje, inteligenciaPersonaje, sabiduriaPersonaje, carismaPersonaje)
    botonSword.addEventListener("click", function () {ataqueEsp(modFuerza)})
    botonBow.addEventListener("click", function () {ataqueArc(modDestreza)})
    }
    
    
    //FUNCIONES QUE SIMULAN ATAQUES
    
    
    function ataqueEsp (mod){
        let salida= ""
        function getRandomInt(max) {
            return Math.floor(Math.random() * max) +1
    
        }                     
        for (let i = 1; i < 11; i++) {
            salida = salida + "ataque " + i + ": " + (Math.floor(mod) + getRandomInt(8)) + "<br/>"
        }
        Swal.fire({
            html: salida,
            title: 'Simulación de 10 ataques',
            imageUrl: 'img/ataque.gif',
            imageWidth: 200,
            imageHeight: 200,
            
        })
    }

    function ataqueArc (mod){
        let salida= ""
        function getRandomInt(max) {
            return Math.floor(Math.random() * max) +1
    
        }                     
        for (let i = 1; i < 11; i++) {
            salida = salida + "ataque " + i + ": " + (Math.floor(mod) + getRandomInt(8)) + "<br/>"
        }
        Swal.fire({
            html: salida,
            title: 'Simulación de 10 ataques',
            imageUrl: 'img/ataquebow.gif',
            imageWidth: 200,
            imageHeight: 200,
            
        })
    }
}

