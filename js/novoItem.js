import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item: ");
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector(".itens_compras_titulo");
        itemTextoAtualizado.textContent = novoItem;

        // Verificar se estava marcado como comprado
        const checkbox = elemento.querySelector(".input_checkbox");
        const estavaComprado = checkbox.checked;
        
        if (estavaComprado) {
            checkbox.checked = true; // Não precisa reatribuir, mas mantido para clareza
            elemento.querySelector(".checkbox_customizado").classList.add("checked"); // Corrigido para classList
            itemTextoAtualizado.style.textDecoration = "line-through"; // Manter a marcação
        }

        // Atualiza data de criação para a data em que foi editado
        const dataDeCriacao = elemento.querySelector(".itens_texto");
        dataDeCriacao.textContent = gerarDiaDaSemana();
    }
};
