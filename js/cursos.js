/*{
"id": "1834",
"nombre": "Andresgf editar",
"descripcion": "wadawdav",
"tiempo": "1",
"usuario": "profesor Mario"
} */


var contenidoTablaResultado = document.querySelector('#resultados');

function cargarDatos() {
    // alert('Cargue datos');
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de dATOS
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
                    <td>${valor.nombre}</td>
                    <td>${valor.descripcion}</td>
                    <td>${valor.tiempo}</td>
                    <td>${valor.usuario}</td>

                    <td><button type="button" class="btn btn-danger" onclick="eliminar('${valor.id}')">Borrar</button>
                     
                     ||
                     <button id="Edit" type="button" class="btn btn-primary" 
                     onclick="actualizar('${valor.id}','${valor.nombre}','${valor.descripcion}'
                     ,'${valor.tiempo}','${valor.usuario}')">Actualizar</button>
                   </td>   
                </tr>`;
    }
}

const myModal = new bootstrap.Modal(document.getElementById('modalId'));

function actualizar(id, nombre, descripcion, tiempo, usuario) {
    console.log(actualizar);
    myModal.show();
    document.getElementById("id").value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("descripcion").value = descripcion;
    document.getElementById("tiempo").value = tiempo;
    document.getElementById("usuario").value = usuario;


}

var formulario = document.getElementById('formulario');


//Funcion para actualizar los datos
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Actualizando datos');
    console.log(datosenviar);
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let tiempo = document.getElementById('tiempo').value;
    let usuario = document.getElementById('usuario').value;


    //Se guardan los datos recuperados en una variable
    var datosenviar = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        tiempo: tiempo,
        usuario: usuario,

    };

    console.log(datosenviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
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

    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
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