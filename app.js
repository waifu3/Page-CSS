var contenido = document.querySelector('#contenido')

function traer() {
    fetch('tabla.json')
        .then(res => res.json())
        .then(datos => {
            // console.log(datos)
            tabla(datos)
        })
}

function tabla(datos) {
    // console.log(datos)
    contenido.innerHTML = ''
    for (let valor of datos) {
        // console.log(valor.nombre)
        contenido.innerHTML += `
                
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td>${ valor.nombre }</td>
                    <td>${ valor.email }</td>
                    <td>${ valor.cargo }</td>
                <td> <img src ='${valor.imagen}' + </td>
                </tr>
                
                `
    }
}