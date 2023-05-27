var contenidoTablaResultado = document.querySelector('#resultados');
function cargarDatos() {
    // alert('Cargue datos');
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php")//url de peticion de dATOS
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
                    <td>${valor.name}</td>
                    <td>${valor.email}</td>
                    <td>${valor.password}</td>

                    <td>
                    <button id="Edit" type="button" class="btn btn-primary" 
                     onclick="actualizar('${valor.name}','${valor.id}',
                     '${valor.password}')">Actualizar</button>
                   </td>   
                </tr>`;
    }
}

const myModal = new bootstrap.Modal(document.getElementById('modalId'));

function actualizar(id, name, password) {
    console.log(actualizar);
    myModal.show();
    document.getElementById("id").value = id;
    document.getElementById("name").value = name;
    document.getElementById("password").value = password;


}

var formulario = document.getElementById('formulario');


//Funcion para actualizar los datos
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Actualizando datos');
    console.log(datosenviar);
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;


    //Se guardan los datos recuperados en una variable
    var datosenviar = {
        id: id,
        name: name,
        password: password
        

    };

    console.log(datosenviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarUsuarios.php",
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


cargarDatos();