//controlar visibilidade da div
const containerListaComprados = document.getElementById("container_lista_comprados");

//verificar se a tag ul está vazia
export function verificaListaComprados(lista){
//  console.log("hello world")
    if(lista.children.length === 0){
        containerListaComprados.style.display = "none";
    }
    else{
        containerListaComprados.style.display = "block";
    }
}