const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const numeroDoc = document.getElementById('numeroDoc');
const form = document.getElementById('form');
const tbody = document.getElementById('tbody');


class Persona {
    constructor(nombre, apellido, numeroDoc) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroDoc = numeroDoc;
    }
}

class Interfaz {
    agregarPersona(persona) {
        const tr = document.createElement('tr');
        const tdNombre = document.createElement('td');
        const tdApellido = document.createElement('td');
        const tdNumeroDoc = document.createElement('td');
        const tdBoton = document.createElement('td');
        const boton = document.createElement('button');
        boton.classList.add('btn', 'btn-danger');
        tdNombre.textContent = persona.nombre;
        tdApellido.textContent = persona.apellido;
        tdNumeroDoc.textContent = persona.numeroDoc;
        boton.textContent = 'Eliminar';
        tdBoton.appendChild(boton);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdNumeroDoc);
        tr.appendChild(tdBoton);
        tbody.appendChild(tr);
    }
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        div.classList.add('alert', 'mt-4');
        if (tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }
        div.textContent = mensaje;
        form.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 3000);
    }
    eliminarPersona(elemento) {
        if (elemento.classList.contains('btn-danger')) {
            elemento.parentElement.parentElement.remove();
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreValue = nombre.value;
    const apellidoValue = apellido.value;
    const numeroDocValue = numeroDoc.value;
    const persona = new Persona(nombreValue, apellidoValue, numeroDocValue);
    const interfaz = new Interfaz();
    if (nombreValue === '' || apellidoValue === '' || numeroDocValue === '') {
        interfaz.mostrarMensaje('Todos los campos son obligatorios', 'error');
    } else {
        interfaz.agregarPersona(persona);
        interfaz.mostrarMensaje('Persona agregada correctamente', 'success');
    }
    form.reset();
});  

tbody.addEventListener('click', (e) => {
    const interfaz = new Interfaz();
    interfaz.eliminarPersona(e.target);
    interfaz.mostrarMensaje('Persona eliminada correctamente', 'success');
});




