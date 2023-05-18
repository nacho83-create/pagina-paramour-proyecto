var contenido = document.querySelector('#contenido')
function traer(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(datos => {
        console.log(datos)
        //this.usuarios=datos
        tabla(datos)
    })
}
function tabla(datos){
    console.log(datos)
    contenido.innerHTML=''
    for(let valor of datos){
        //console.log(valor.name)
        contenido.innerHTML +=`
            <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.name }</td>
            <td>${ valor.username }</td>
            <td>${ valor.email }</td>
            <td>${ valor.phone }</td>
            <td>${ valor.address.city }</td>
            </tr>
        
        `    
    }
} 

