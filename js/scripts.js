window.addEventListener('scroll', function () {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
});

function validar(event) {
  event.preventDefault();
  console.log('dentro...');
  let nombreInput = document.querySelector('#nombre').value;
  let emailInput = document.querySelector('#email').value;
  let numeroInput = document.querySelector('#numero').value;
  let mensajeInput = document.querySelector('#mensaje').value;
  let respuestaInput = document.querySelector('#respuesta');

  let regla =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    nombreInput == '' ||
    emailInput == '' ||
    numeroInput == '' ||
    mensajeInput == ''
  ) {
    document.querySelector('#respuesta').innerHTML =
      'Debe rellenar todos los campos';
  } else if (!regla.test(emailInput)) {
    document.querySelector('#respuesta').innerHTML = 'Email no válido';
  } else {
    document.querySelector('#respuesta').innerHTML =
      'Formulario enviado con éxito';
    document.getElementById('formulario').submit();
  }
}
