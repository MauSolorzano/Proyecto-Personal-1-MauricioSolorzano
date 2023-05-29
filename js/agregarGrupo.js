var formulario = document.getElementById('formularioAgregar');

formulario.addEventListener('submit', function (e) {
    alert('SALVANDO');

    e.preventDefault()

    var datosenviar = {
        "nombre": document.getElementById("nombre").value
    }
    console.log(datosenviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
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
