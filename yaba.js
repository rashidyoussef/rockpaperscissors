let rock = 0;
let paper = 1;
let scissors = 2;
let choice; 
let comput;
let resultado;
let playerscore = 0;
let compuscore = 0;

function game() {
    rockpaperscissor();
    rockpaperscissor();
    rockpaperscissor();
    rockpaperscissor();
    rockpaperscissor();
}

game();

function rockpaperscissor() {
    function playerchoice() {
        choice = prompt('Elige Piedra, Papel o Tijeras','');
        choice = choice.toUpperCase();
        console.log('Elegiste:' + choice);
        return choice;
    }
    playerchoice();
    function computerchoice() {
        comput = Math.floor(Math.random()*3);
        return comput;
        }
    computerchoice()
    if (comput == 0) {
            console.log('La compu eligió Piedra');
        }
        else if (comput == 1){
            console.log('La compu eligió Papel');
            }
        else if (comput == 2){
            console.log('la compu eligió Tijeras');
            }
    function calcular() {
    if (choice == 'PIEDRA' || choice == 'ROCK') {
        if (comput == 0) {
                resultado = 'TIE';
                return resultado;
            }
            else if (comput == 1) {
                resultado = 'LOSE';
                return resultado;
                }
            else {
                resultado = 'WIN';
                return resultado;
                        }                
    }

    if (choice == 'PAPEL' || choice == 'PAPER') {
        if (comput == 0) {
            resultado = 'WIN';
            return resultado;
        }
        else if (comput == 1) {
            resultado = 'TIE';
            return resultado;
            }
        else {
            resultado = 'LOSE';
            return resultado;
        }
    }

    if (choice == 'TIJERA' || choice == 'SCISSORS' || choice == 'TIJERAS') {
        if (comput == 0) {
            resultado = 'LOSE';
            return resultado;
        }
        else if (comput == 1) {
            resultado = 'WIN';
            return resultado;
            }
        else {
            resultado = 'TIE';
            return resultado;
        }
    }
    }
    if (resultado = 'WIN') {
        playerscore++;
        return playerscore;
    }
    else if (resultado = 'LOSE'){
        compuscore++;
        return compuscore;
    }
    else if (resultado = 'TIE'){
        playerscore++;
        compuscore++;
        return playerscore;
        return compuscore;
    }
  


    calcular();

    if (resultado == 'LOSE') {
        console.log('Perdiste mijo');
    }
    else if (resultado == 'WIN') {
        console.log('Ganaste we');
    }
    else {
        console.log('Pues no perdiste, pero tampoco ganaste');
    }
    }

    if (playerscore > compuscore) {
        console.log('Ganaste la partida final');
    }
    else if (playerscore = compuscore) {
        console.log('Empataste con una computadora jajajaja');
    }
    else if (playerscore < compuscore) {
        console.log('Nmms perdiste jsjsjsjs');
    }

    
    console.log(compuscore);
    console.log(playerscore);