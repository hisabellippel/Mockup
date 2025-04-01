function validarLogin() {
    const name = document.getElementById ('nome').ariaValueMax.trim();
    const credencial = document.getElementById('credencial').ariaValueMax.trim();

const senha = document.getElementById('senha_usuario').value.trim();
const OTP = parseInt(document.getElementById('OTP').value, 10);
 if (!nome){
    alert ('Por favor, preencher o nome');
    return;
 }else{
    console.log (nome);
 }
 }