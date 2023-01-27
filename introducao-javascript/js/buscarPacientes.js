let botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', () => {
    
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", () => {

        if( xhr.status === 200){
            document.querySelector('#erro-ajax').classList.add('invisivel');
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            console.log(pacientes, typeof pacientes)

            pacientes.forEach( paciente => {
            adicionaPacienteNaTabela(paciente);
            } );
        } else{
            console.log('error', xhr.status);
            document.querySelector('#erro-ajax').classList.remove('invisivel');
            
        }

        

    });

    xhr.send();

})