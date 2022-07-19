function pegaPokemons(quantidade){
    fetch("https://pokeapi.co/api/v2/pokemon?limit="+quantidade)
    .then(response => response.json())
    .then(aLLpokemon => {
        var pokemons = [];
        aLLpokemon.results.map((vaL)=>{
            fetch(vaL.url)
                .then(response => response.json())
                .then(pokemonSingle =>{
                    pokemons.push({
                        nome:vaL.name,
                        imagem:pokemonSingle.sprites.front_default
                    });
                    if(pokemons.length == quantidade){ // apenas quando fizer .push == quantidade
                        var pokemonBoxes = document.querySelector(".pokeBoxes")
                        pokemonBoxes.innerHTML = "";

                        pokemons.map((vaL)=>{
                            pokemonBoxes.innerHTML += 
                            `
                            <div class="pokeBoxe">
                                <img src="`+vaL.imagem+`"/>
                                <p>`+vaL.nome+`</p>
                            </div> 
                            `
                        })
                    }
            })
            
        })
    })

}
    
var capturar = document.querySelector("input[name=capturar]");
var qnt = document.querySelector("input[name=quantidade");
capturar.addEventListener("click",()=>{
    pegaPokemons(qnt.value);
})