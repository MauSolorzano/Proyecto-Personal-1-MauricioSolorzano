contenidoMenu.innerHTML += `

<ul class="nav nav-tabs" id="navId" role="tablist">

    <li class="nav-item" role="presentation">
        <a href="index.html" class="nav-link">Inicio</a>
    </li>

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Estudiantes</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="estudiantes.html">Estudiantes</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="agregarEstudiantes.html">Agregar estudiantes</a>  
        </div>
    </li>
    </li><li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profesores</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="profesores.html">Profesores</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="agregarProfesores.html">Agregar profesores</a>  
        </div>
    </li>


    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="curso.html">Cursos</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="agregarCurso.html">Agregar cursos</a>  
        </div>
    </li>


    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Grupos</a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="grupos.html">grupos</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="agregarGrupos.html">Agregar grupos</a>  
    </div>


   
</ul>

<!-- Tab panes -->
<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="index" role="tabpanel"></div>
    <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
    <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
    <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
    <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
</div>
            `; 