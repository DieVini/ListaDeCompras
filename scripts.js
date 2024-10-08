import{gerarDiaDaSemana} from "./js/gerarDiaDaSemana.js";
import {verificaListaComprados} from "./js/verificaListaComprados.js";
import { verificaListaVazia } from "./js/verificaListaVazia.js";
import { editarItem } from "./js/novoItem.js";

const compras = document.getElementById("adicionar_compras"); //input para adicionar as compras.
const salvar = document.getElementById("adicionar_botao");
const listaDeCompras = document.getElementById("itens_compras");
const listaComprados = document.getElementById("itens_comprados")
let contador = 0;

salvar.addEventListener("click", adicionarItem); //onclick
function adicionarItem(evento){
    evento.preventDefault(); //evitar refresh na página quando clicar no botão
    const item = compras.value.trim(); 

    const lista = document.createElement("li");
    const listaComprasConteudo = document.createElement("div");
    listaComprasConteudo.classList.add("itens_compras_conteudo");
    lista.appendChild(listaComprasConteudo); //adicionar dentro da div respectiva
    
    const comprasAdicionadas = document.createElement("div"); //div que engloba checkbox e nome do item adicionado
    comprasAdicionadas.classList.add("itens_compras_conteudo");
    listaComprasConteudo.appendChild(comprasAdicionadas);

    const Checkbox = document.createElement("input");
    Checkbox.type = "checkbox";
    Checkbox.classList.add("input_checkbox");
    Checkbox.id = "checkbox-" + contador++; 

    const itensCheckbox = document.createElement("label"); //inicio do macete para checkbox customizado
    itensCheckbox.setAttribute("for", Checkbox.id) 
    comprasAdicionadas.appendChild(itensCheckbox);
    itensCheckbox.appendChild(Checkbox);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox_customizado");
    itensCheckbox.appendChild(checkboxCustomizado);

    itensCheckbox.addEventListener("click", function(evento) {
        const checkbox = evento.currentTarget.querySelector(".input_checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox_customizado");
        const comprasTitulo = evento.currentTarget.closest("li").querySelector(".itens_compras_titulo");
        const lista = evento.currentTarget.closest("li");
        if(checkbox.checked){
            checkboxCustomizado.classList.add("checked");
            comprasTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(lista);
        }
        else{
            checkboxCustomizado.classList.remove("checked");
            comprasTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(lista); // Mover o item
        }
        verificaListaComprados(listaComprados);
    })

    const comprasTitulo = document.createElement("h3");
    comprasTitulo.classList.add("itens_compras_titulo");
    comprasTitulo.innerText = item; //qual é o value?
    comprasAdicionadas.appendChild(comprasTitulo); //listaComprasConteudo

    const edicao = document.createElement("div");
    edicao.classList.add("itens_edicao");
    listaComprasConteudo.appendChild(edicao);

    const imgRemover = document.createElement("a"); //botoes 
    imgRemover.href = "#"
    imgRemover.innerHTML = `<img src="assets/Excluir.svg" alt="Remover">`;
    imgRemover.addEventListener("click", function () {
        const confirmacao = confirm("você tem certeza que deseja remover este item?");
        if (confirmacao){
            lista.remove(); // Remove o item da lista
            verificaListaComprados(listaComprados);
            verificaListaVazia(listaDeCompras);
        }
    });
    edicao.appendChild(imgRemover);

    const imgEditar = document.createElement("a"); //botoes 
    imgEditar.href = "#";
    imgEditar.innerHTML = `<img src="assets/Edição.svg" alt="Editar">`;
    imgEditar.addEventListener("click", function () {
        editarItem(lista); // Chama a função de editar passando o item da lista
    });
    edicao.appendChild(imgEditar);

    const data = document.createElement("p"); //data 
    data.classList.add("itens_texto");
    data.innerHTML= gerarDiaDaSemana();
    lista.appendChild(data);

    listaDeCompras.appendChild(lista); 
    compras.value = "";
    //verificar a visibilade da lista e das mensagens
    verificaListaComprados(listaComprados);
    verificaListaVazia(listaDeCompras);    
}
