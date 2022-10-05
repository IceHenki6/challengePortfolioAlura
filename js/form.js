const btnEnviar = document.getElementById("btn-enviar");

const input = document.querySelectorAll('.input');
const textarea = document.getElementById('mensaje');

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Sent');

    input.forEach(input => {input.value = ''});
    mensaje.value = '';
})