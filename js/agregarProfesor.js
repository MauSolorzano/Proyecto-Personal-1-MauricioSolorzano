var cargarGrupos = document.querySelector('#selectGrupo');

function cargarGrupo() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrespuesta) => {

            for (const valor of datosrespuesta.data) {
                cargarGrupos.innerHTML += `
           <option value="${valor.id}">${valor.nombre}</option>`;
            }
        })
        .catch(console.log)//muestra errores
}
cargarGrupo();
/*
"id": "1234675",
"cedula": "29292929666",
"correoelectronico": "MARIO66@GMAIL.COM",
"telefono": "98982929666",
"telefonocelular": "24402230666",
"fechanacimiento": "2023-05-18",
"sexo": "female666",
"direccion": "Puerto papa666",
"nombre": "Mario666",
"apellidopaterno": "Jimenez666",
"apellidomaterno": "Jimenez666",
"idCarreras": "1134",
"usuario": "Lucas666",
"nacionalidad": "German666" */

var formulario1 = document.getElementById('formularioAgregar');

formulario1.addEventListener('submit', function (e) {
    alert('SALVANDO');

    e.preventDefault()

    var datosenviar = {
        "cedula": document.getElementById("cedula").value,
        "correoelectronico": document.getElementById("correoelectronico").value,
        "telefono": document.getElementById("telefono").value,
        "telefonocelular": document.getElementById("telefonocelular").value,
        "fechanacimiento": document.getElementById("fechanacimiento").value,
        "sexo": document.getElementById("sexo").value,
        "direccion": document.getElementById("direccion").value,
        "nombre": document.getElementById("nombre").value,
        "apellidopaterno": document.getElementById("apellidopaterno").value,
        "apellidomaterno": document.getElementById("apellidomaterno").value,
        "nacionalidad": document.getElementById("nacionalidad").value,
        "idCarreras": document.getElementById("selectGrupo").value,
        "usuario": document.getElementById("usuario").value

    }
    console.log(datosenviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php",
        {
            method: 'POST',
            body: JSON.stringify(datosenviar)
        })

        .then(respuesta => respuesta.json())
        .then((datosrespuesta) => {
            console.log('Datos', datosrespuesta)
        })
        .catch(console.log)
})