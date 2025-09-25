//captura o botão menu de hamburguer
const botaoMenu = document.querySelector(".botaoMenu");


//atribui ao menu de hamburguer o evento de escutar de clique (passa a monitorar o clique)
botaoMenu.addEventListener("click", abrirmenu);
 
//captura o elemento nav, que é o menu flutuante
const menu = document.querySelector("#menuCabecalho");


//função a ser executada quando ouvir o clique no botão de hamburguer
function abrirmenu(){    
    menu.classList.remove("menuFechado");
    menu.classList.add("menuAberto");


}

//capturar o botão de fechar menu, dentro do nav
const btnFecharMenu = document.querySelector(".btnFechar");

//atribuir evento de clique (monitorar) ao botão de fechar menu
btnFecharMenu.addEventListener("click", fecharmenu);

//função a ser executada ao ouvir o clique no botão de fechar menu
function fecharmenu(){
    menu.classList.remove("menuAberto");
    menu.classList.add("menuFechado");
}








//cria uma instância do objeto que contém todas as informações sobre a data atual
const data = new Date();

//captura, daquela instância, o ano atual
const anoAtual = data.getFullYear();

//captura o elemento com classe ano
let spanAno = document.querySelector(".ano");

//zera, por segurança, o conteúdo interno do span
spanAno.innerHTML = "";

//injeta o ano atual no conteúdo interno do span
spanAno.innerHTML = anoAtual;