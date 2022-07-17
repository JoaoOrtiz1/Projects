const elementosP = document.querySelectorAll(".playerOptions div > img");
const elementosE = document.querySelectorAll(".enemyOptions div > img");
const placar = document.querySelector(".results");
const limpar = document.querySelector(".clear input[type=submit");

var playersOpt = "";
var enemyOpt= "";

var lose = 0;
var win = 0;
var draw = 0;

limpar.addEventListener("click", ()=>{
    opacityResetEnemy();
    opacityResetPlayer();
    lose = 0;
    win = 0;
    draw = 0;
    PlacarAlt(0,0,0);
})

for(var i = 0; i<elementosP.length; i++){
    elementosP[i].addEventListener("click", (imgs)=>{
        opacityResetPlayer();
        elementosP[i]= imgs.target.style.opacity = 1;
        playersOpt = imgs.target.getAttribute("opt");
        enemyPlay();
    })
}

function opacityResetEnemy(){
    for(var i = 0; i<elementosE.length; i++){
        elementosE[i].style.opacity = 0.2;
    }
}

function opacityResetPlayer(){
    for(var i = 0; i<elementosP.length; i++){
        elementosP[i].style.opacity = 0.2;
    }
}

function validarResultados(){
    if(playersOpt == "rock"){
        if(enemyOpt =="rock"){
            return "2"
        }
        else if(enemyOpt == "paper"){
            return "0"
        }
        else if(enemyOpt == "scissor"){
            return "1"
        }
    }

    if(playersOpt == "paper"){
        if(enemyOpt =="rock"){
            return "1"
        }
        else if(enemyOpt == "paper"){
            return "2"
        }
        else if(enemyOpt == "scissor"){
            return "0"
        }
    }

    if(playersOpt == "scissor"){
        if(enemyOpt =="rock"){
            return "0"
        }
        else if(enemyOpt == "paper"){
            return "1"
        }
        else if(enemyOpt == "scissor"){
            return "2"
        }
    }
}

function PlacarAlt(lose,win,draw){
    placar.innerHTML = 
    `   <h1>Placar</h1>
        <p>Vecna Win's: `+lose+`</p> 
        <p>Player Win's: `+win+`</p>
        <p>Draws:`+draw+`</p>
    `
}

function enemyPlay(){
    opacityResetEnemy();
    setTimeout(()=>{
        let rand = Math.floor(Math.random()*3);
        const elementosE = document.querySelectorAll(".enemyOptions div > img");
        for(var i = 0; i<elementosE.length; i++){
            if(i==rand){
                elementosE[i].style.opacity = 1;
                enemyOpt = elementosE[i].getAttribute("opt");
            }
        }
        validarResultados();
        var validar = validarResultados();
        if(validar == "0"){
            lose += 1;
        }else if(validar == "1"){
            win += 1;
        }else{
            draw += 1;
        }
        PlacarAlt(lose,win,draw);
    },1000)

}




