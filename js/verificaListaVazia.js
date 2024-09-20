const mensagemListaVazia = document.getElementById("mensagem_lista_vazia"); 

export function verificaListaVazia(lista){
    console.log("hello world")
    if(lista.querySelectorAll("li").length === 0){
        mensagemListaVazia.style.display = "block";
    }
    else{
        mensagemListaVazia.style.display = "none";
    }
}