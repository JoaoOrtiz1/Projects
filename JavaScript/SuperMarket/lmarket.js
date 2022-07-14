var produtos = [];
var produtosLista = document.querySelector(".produtosLista");
var produtoSoma = document.querySelector(".produtoSoma");
var bClear = document.querySelector("input[name=limpar]");
var soma = 0;
var bSubmit = document.querySelector("input[name=cadastrar]")
.addEventListener("click",()=>{
    var produtoNome = document.querySelector("input[name=nomeProduto]");
    var produtoPreco = document.querySelector("input[name=precoProduto]");
    produtos.push({
        "nome" : produtoNome.value,
        "valor" : produtoPreco.value
    });
    produtosLista.innerHTML= "";
    produtos.map((func)=>{
        produtosLista.innerHTML += 
        `
        <div class="produtoSingle">
            <h3>`+func.nome+`</h3>
            <h3 class="produtoPreco"><span>R$`+func.valor+`</span></h3>
        </div>
        `
        soma += parseFloat(func.valor);
        produtoSoma.innerHTML = 
        `
            <h1>Total: R$`+soma+`</h1>
        `
    });
    produtoNome.value = "";
    produtoPreco.value = "";
});
var bClear = document.querySelector("input[name=limpar]")
.addEventListener("click",()=>{
    soma = 0;
    produtos = [];
    produtosLista.innerHTML = `<div class="produtoSingle></div>`;
    produtoSoma.innerHTML = "<h1>Total: R$00,00</h1>";
})

