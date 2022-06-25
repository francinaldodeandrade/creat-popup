function abrir(id){
    document.getElementById(id).style.display = "block"
}

function fechar(id){
    document.getElementById(id).style.display = "none"
}

// declarando a função para abrir e fechar pop-up
const open = document.getElementById(open);
const fechado = document.getElementById(fechado);
const container = document.getElementById(container);

// escutar o evento ao botão ser clicado e chamar a classe active
open.addEventlistener('click', () => {
    container.classList.add('active');
}
    );

// escutar o evento ao botão ser clicado e remover a classe active
fechado.addEventlistener('click', () => {
    container.classList.remove('active');
}
    );