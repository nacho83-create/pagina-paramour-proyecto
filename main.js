var contenido = document.querySelector('#contenido')
function traer(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(datos => {
        tabla(datos)
    })
}
function tabla(datos){
    contenido.innerHTML=''
    for(let valor of datos){
        
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
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const direccion = document.getElementById("direccion")
const lugar = document.getElementById("lugar")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar= false
    let regexName=/^[A-Za-z]+$/
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexPhone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{6})$/

    if (!regexName.test(nombre.value)){
        warnings+=`Invalid Name <br>`
        entrar=true
    }
    if (!regexName.test(apellido.value)){
        warnings+=`Invalid UserName <br>`
        entrar=true
    }
    if (!regexPhone.test(telefono.value)){
        warnings+=`Invalid Phone <br>`
        entrar=true
    }
    if (!regexEmail.test(email.value)){
        warnings+=`Invalid Email <br>`
        entrar=true
    }
    if (direccion.value.length<1){
        warnings+=`Invalid Address <br>`
        entrar=true
    }
    if (!regexName.test(lugar.value)){
        warnings+=`Invalid Province/Country  <br>`
        entrar=true
    }
    if (entrar){
        parrafo.innerHTML= warnings
    }else{
        parrafo.innerHTML= "Sent Successfully"
    }
    

})


