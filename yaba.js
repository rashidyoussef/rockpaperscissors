let rock = 0;
let paper = 1;
let scissors = 2;
let choice; 
let comput;
let resultado;

function rockpaperscissor() {
    function playerchoice() {
        choice = prompt('Elige Piedra, Papel o Tijeras','');
        choice = choice.toUpperCase();
        console.log('Elegiste:' + choice);
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
            }
            else if (comput == 1) {
                resultado = 'LOSE';
                }
            else {
                resultado = 'WIN';
        }
    }

    if (choice == 'PAPEL' || choice == 'PAPER') {
        if (comput == 0) {
            resultado = 'WIN';
        }
        else if (comput == 1) {
            resultado = 'TIE';
            }
        else {
            resultado = 'LOSE';
        }
    }

    if (choice == 'TIJERA' || choice == 'SCISSORS' || choice == 'TIJERAS') {
        if (comput == 0) {
            resultado = 'LOSE';
        }
        else if (comput == 1) {
            resultado = 'WIN';
            }
        else {
            resultado = 'TIE';
        }
    }
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

rockpaperscissor();