const inputs = document.getElementsByTagName("input")
const tbody = document.getElementById("productos")
inputs[0].value = "Cuaderno"

const btnCrear = document.getElementById("crear")

btnCrear.onclick = (e) => {
    e.preventDefault()
    console.log("HOla")
    // Obtener valores
    const producto = inputs[0].value
    const desc = inputs[1].value
    const cantidad = inputs[2].value
    const precio = inputs[3].value
    console.log(producto,desc,cantidad,precio)
    // Crear elementos
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")
    td1.innerText = producto
    td2.innerText = desc
    td3.innerText = cantidad
    td4.innerText = precio
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    // Añadir elementos
    tbody.appendChild(tr)
}