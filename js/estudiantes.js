//Declaracion de variable u objetos

var contenidoTablaResultado = document.querySelector('#resultados');
function cargarDatos() {
    // alert('Cargue datos');
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")//url de peticion de dATOS
        .then(respuesta => respuesta.json())//respuesta recibe los datps en formato json 
        .then((datosrespuesta) => {
            setTable(datosrespuesta.data)//lo envio para la funcion para darle tratamiento a los datos
            //console.log('Datos', datosrespuesta.data)//muestra el resulado de la peticion 
        })
        .catch(console.log)//muestra error         
}

function setTable(datos) {
    console.log('datos', datos)
    // contenidoTablaResultado.innerHTML = 'test';
    for (const valor of datos) {
        console.log('valor:', valor);
        contenidoTablaResultado.innerHTML += `
                 <tr class="table-primary" >
                     <td scope="row">${valor.id}</td>
                    <td>${valor.cedula}</td>
                    <td>${valor.correoelectronico}</td>
                    <td>${valor.telefono}</td>
                    <td>${valor.telefonocelular}</td>
                    <td>${valor.fechanacimiento}</td>
                    <td>${valor.sexo}</td>
                    <td>${valor.direccion}</td>
                    <td>${valor.nombre}</td>
                    <td>${valor.apellidopaterno}</td>
                    <td>${valor.apellidomaterno}</td>
                    <td>${valor.nacionalidad}</td>
                    <td>${valor.idCarreras}</td>
                    <td>${valor.usuario}</td>



                    <td><button type="button" class="btn btn-danger" onclick="eliminar('${valor.id}')">Borrar</button>
                     
                     ||
                     <button id="Edit" type="button" class="btn btn-primary" 
                     onclick="actualizar('${valor.id}','${valor.cedula}',
                     '${valor.correoelectronico}','${valor.telefono}','${valor.direccion}'
                     ,'${valor.nombre}','${valor.apellidopaterno}','${valor.apellidomaterno}'
                     ,'${valor.idCarreras}')">Actualizar</button>
                   </td>   
                </tr>`;
    }
}

const myModal = new bootstrap.Modal(document.getElementById('modalId'));

function actualizar(id, cedula, correoelectronico, telefono,telefonocelular,fechanacimiento,
    direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, usuario, idCarreras) {
    console.log(actualizar);
    myModal.show();
    document.getElementById("id").value = id;
    document.getElementById("cedula").value = cedula;
    document.getElementById("correoelectronico").value = correoelectronico;
    document.getElementById("telefono").value = telefono;
    document.getElementById("telefonocelular").value = telefonocelular;
    document.getElementById("fechanacimiento").value = fechanacimiento;
    document.getElementById("sexo").value = sexo;
    document.getElementById("direccion").value = direccion;
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellidopaterno").value = apellidopaterno;
    document.getElementById("apellidomaterno").value = apellidomaterno;
    document.getElementById("nacionalidad").value=nacionalidad;
    document.getElementById("idCarreras").value = idCarreras;
    document.getElementById("usuario").value = usuario;

}

var formulario = document.getElementById('formulario');


//Funcion para actualizar los datos
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Actualizando datos');
    console.log(datosenviar);
    let id = document.getElementById('id').value;
    let cedula = document.getElementById('cedula').value;
    let correoelectronico = document.getElementById('correoelectronico').value;
    let telefono = document.getElementById('telefono').value;
    let telefonocelular = document.getElementById('telefonocelular').value;
    let fechanacimiento = document.getElementById('fechanacimiento').value;
    let sexo = document.getElementById('sexo').value;
    let direccion = document.getElementById('direccion').value;
    let nombre = document.getElementById('nombre').value;
    let apellidopaterno = document.getElementById('apellidopaterno').value;
    let apellidomaterno = document.getElementById('apellidomaterno').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let idCarreras = document.getElementById('idCarreras').value;
    let usuario = document.getElementById('usuario').value;

    //Se guardan los datos recuperados en una variable
    var datosenviar = {
        id: id,
        cedula: cedula,
        correoelectronico: correoelectronico,
        telefono: telefono,
        telefonocelular: telefonocelular,
        fechanacimiento:fechanacimiento,
        sexo: sexo,
        direccion: direccion,
        nombre: nombre,
        apellidopaterno: apellidopaterno,
        apellidomaterno: apellidomaterno,
        nacionalidad: nacionalidad,
        idCarreras: idCarreras,
        usuario: usuario
    };

    console.log(datosenviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
        {
            method: 'POST',
            body: JSON.stringify(datosenviar)
        }).then(function (response) {
            //Manejo la respuesta de la API
            if (response.ok) {
                alert("Datos modificados correctamente.");
                myModal.hide();

                contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
                cargarDatos();
            } else {
                alert("Error al enviar los datos.");
            }
        })
        .catch(function (error) {
            console.log(error);
            alert("Error al enviar los datos Catch");
        });
});
function eliminar(id) {
    alert('Esta a punto de eliminar ' + id)
    var datosenviar = {
        id: id
    }

    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php", {
        method: "POST",
        body: JSON.stringify(datosenviar)

    })
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {
            alert("Datos eliminados correctamente.");


            contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
            cargarDatos();
        })
        .catch(console.log)//muestra errores
}

cargarDatos();