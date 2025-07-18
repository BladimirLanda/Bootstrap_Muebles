//GALLERY
const modalImagen = document.querySelector("#modal-imagen");
const imagenModal = document.querySelector("#img-modal");

//Eventos Bootstrap
if(modalImagen) {
    /*
    show.bs.modal: Es un evento que se dispara justo antes de que un modal se muestre.
        -show → indica que está por mostrarse
        -bs → viene de Bootstrap
        -modal → el componente afectado
    */
    modalImagen.addEventListener('show.bs.modal', e => {
    /*
     .relatedTarget: Hace referencia al elemento que activó el modal, es decir, 
     el botón o enlace que se usó para abrirlo.
    */
    const activatedModal = e.relatedTarget;
    const imgSrc = activatedModal.getAttribute("data-src");
    imagenModal.src = `img/${imgSrc}.jpg`;
    });
}

//Validación Formulario Bootstrap (https://getbootstrap.com/docs/5.0/forms/validation/)
const forms = document.querySelectorAll('.needs-validation');

if(forms) {
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        });
}