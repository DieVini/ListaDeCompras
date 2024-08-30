//console.log("hello world");
const compras = document.getElementById("adicionar_compras"); //input para adicionar as compras.
const salvar = document.getElementById("adicionar_botao");
salvar.addEventListener("click", clicar);

function clicar(evento){
    evento.preventDefault()
    console.log("entrei na funcao");
    const lista = document.createElement("li");

    const listaComprasConteudo = document.createElement("div");
    listaComprasConteudo.classList.add("itens_compras_conteudo");
    listaComprasConteudo.appendChild(lista); //adicionar dentro da div respectiva

    const itensCheckbox = document.createElement("div");
    itensCheckbox.classList.add("itens_checkbox");
    itensCheckbox.appendChild(listaComprasConteudo);

    const Checkbox = document.createElement("input");
    Checkbox.classList.add("input_checkbox");
    Checkbox.appendChild(itensCheckbox);

    const CheckboxCustomizado = document.createElement("div");
    CheckboxCustomizado.classList.add("checkbox_customizado checked");
    CheckboxCustomizado.appendChild(itensCheckbox);

    const comprasTitulo = document.createElement("h3");
    comprasTitulo.classList.add("itens_compras_titulo");
    comprasTitulo.appendChild(listaComprasConteudo);

    const edicao = document.createElement("div");
    edicao.classList.add("itens_edicao");
    edicao.appendChild(listaComprasConteudo);

    const edicaoIMG = document.createElement("a");
    edicaoIMG.classList.add("itens_edicao_img");
    edicaoIMG.appendChild(edicao);

    const data = document.createElement("p");
    data.classList.add("itens_texto");
    data.appendChild(lista);
}
/*document.createElement ("div class= itens_compras_conteudo")
    document.createElement ("div class= itens_compras_conteudo")
        document.createElement ("div class=itens_checkbox")
            <input type="checkbox" class= "input_checkbox" id="meuCheckbox" name="meuCheckbox">
            <div class="checkbox_customizado checked"></div>
            </div>
            <h3 class="itens_compras_titulo">Queijo Minas</h3>
        </div>
        <div class="itens_edicao">
            <a class="itens_edicao_img" href="#"><img src="./assets/Excluir.svg" alt="imagem de lixeira para excluir itens"></a>
            <a class="itens_edicao_img" href="#"><img src="./assets/Edição.svg" alt="imagem de um lapis para editar itens"></a>
        </div>
    </div>
    <p class="itens_texto">Segunda feira (31/10/2022) às 08:30</p>
</li>*/