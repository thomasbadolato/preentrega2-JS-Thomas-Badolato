

console.log(document)

const tituloPrincipal = document.getElementById("titulo-principal")
console.log(tituloPrincipal)
console.log(typeof tituloPrincipal)

const contenedores = document.getElementsByClassName("contenedor")
console.log(contenedores)

const div = document.getElementsByTagName("li")
console.log(div)

const tituloQuerySelector = document.querySelector("#titulo-principal")

const contenedorQuerySelector = document.querySelectorAll(".contenedor")
const divQuerySelector = document.querySelectorAll("div")

console.log(tituloQuerySelector)
console.log(contenedorQuerySelector)
console.log(divQuerySelector)


console.log(document)

const container = document.querySelector(".contenedor")

const card = document.createElement("div")

card.className = "tarjeta"

card.textContent = "isay"

console.log(card)
