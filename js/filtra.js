const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {
    

    let pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach( (paciente) => {
        let tdNome = paciente.querySelector('.info-nome');
        let nome = tdNome.textContent;
        let expressao = new RegExp(this.value, 'i');

        if( !expressao.test(nome) ){
            paciente.classList.add('invisivel');
        } else{
            paciente.classList.remove('invisivel'); 
        }
    });

})