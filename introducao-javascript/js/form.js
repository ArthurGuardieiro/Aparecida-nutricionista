let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', (e) => {
    e.preventDefault();
    
    let form = document.querySelector('#form-adiciona');
    let paciente = obtemPacienteDoFormulario (form);


    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibirMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente)
    
    form.reset();
    document.getElementById('mensagens-erro').innerHTML = '';

});

function adicionaPacienteNaTabela(paciente) {

    let pacienteTr = montaTr(paciente);
    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);

}


function obtemPacienteDoFormulario (form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr
}

function montaTd(dado, classe) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    let erros = [];

    if(paciente.nome.length === 0) erros.push('O nome não pode estar em branco');
    if(!validaPeso(paciente.peso) ) erros.push('Peso é inválido!');
    if(!validaAltura(paciente.altura) ) erros.push('Altura é inválida!');
    if(paciente.gordura.length === 0) erros.push('O percentual de gordura não pode estar em branco');    
    
    return erros;

}

function exibirMensagensDeErro (erros) {

    document.getElementById('mensagens-erro').innerHTML = '';

    erros.forEach(el => {
        
        let liErro = document.createElement('li');
        liErro.textContent = el;
        
        document.getElementById('mensagens-erro').appendChild(liErro);

    });

}