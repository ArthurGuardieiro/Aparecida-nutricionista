var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', (e) =>  {
    e.target.parentNode.classList.add('fadeOut');

    setTimeout( () => {
        e.target.parentNode.remove();
    }, 500 );

});