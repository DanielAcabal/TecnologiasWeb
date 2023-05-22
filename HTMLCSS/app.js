const h3 = document.getElementById("identificador")
console.log(h3)
const img = document.getElementsByTagName("img")
console.log(img[0])
const elementos = document.getElementsByClassName("titulo")
for (const iterator of elementos) {
    console.log(iterator)
}
elementos[0].innerHTML = "HOla"

//Cambiando atributos
 img[0].width = "500"

 const titulo1 = document.getElementsByTagName("h1")
 titulo1[0].style.color = "red"
 const span = document.getElementsByTagName("span")
 console.log(span[0].style.color)
 span[0].style.color = "green"
 // Creando elementos
const sabado = document.createElement("li")
sabado.innerHTML= "Sabado"
const dias = document.getElementById("dias")
// Añadir elemmento
dias.appendChild(sabado)
dias.appendChild(sabado)
// Eliminar elementos hijos
console.log(dias.firstElementChild)
dias.removeChild(dias.firstElementChild)