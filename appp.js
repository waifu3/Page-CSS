var contenido = document.querySelector('#contenido')

function traer() {
    fetch('tablaa.json')
        .then(res => res.json())
        .then(datos => {
            // console.log(datos)
            tablaa(datos)
        })
}

function tablaa(datos) {
    // console.log(datos)
    contenido.innerHTML = ''
    for (let valor of datos) {
        // console.log(valor.nombre)
        contenido.innerHTML += `
                
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td>${ valor.nombre }</td>
                    <td>${ valor.descripcion }</td>
                <td> <img src ='${valor.imagen}' + </td>
                </tr>
                
                `
    }
}