var formulario = document.getElementById('formularioAgregar');

formulario.addEventListener('submit', function (e) {
    alert('SALVANDO');

    e.preventDefault()

    var datosenviar = {
        "nombre": document.getElementById("nombre").value,
        "descripcion": document.getElementById("descripcion").value,
        "tiempo": document.getElementById("tiempo").value,
        "usuario": document.getElementById("usuario").value
    }
    console.log(datosenviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
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