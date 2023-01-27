let titulo = document.querySelector('h1');
titulo.innerHTML = 'Aparecida Nutricionista';

let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach( (paciente) => {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    let imcLinha = paciente.querySelector('.info-imc');

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if(!pesoValido){
        pesoValido = false;
        imcLinha.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
    }

    if(!alturaValida){
        alturaValida = false;
        imcLinha.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    }

    if(pesoValido && alturaValida){
        let imc = calculaImc(peso, altura);
        imcLinha.textContent = imc
    }

} );

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if(peso > 0 && peso < 1000){
        return true;
    }

    return false;

}

function validaAltura(altura) {

    if(altura > 0 && altura < 3){
        return true;
    }
    return false;

}