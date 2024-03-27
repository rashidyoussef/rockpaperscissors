let choice; 
let pcchoice;
let comput;
let playerscore = 0;
let compuscore = 0;
const botones = document.querySelectorAll("button");
const piedra = document.getElementById("rock");
const papel = document.getElementById("paper");
const tijera = document.getElementById("scissors");

const resultados = document.getElementById("resultados");
const seleccionjugador = document.createElement("p");
const seleccionpc = document.createElement("p");
const resultadojugador = document.createElement("h3");
const resultadocompu = document.createElement("h3");


botones.forEach((button) => {
  button.addEventListener("click", () => {
    choice = (button.id);
    rockpaperscissor()
  });
});

function rockpaperscissor(playerchoice,pcchoice) {
    function computerchoice() {
        comput = Math.floor(Math.random()*3);
        if (comput == 0) {
            pcchoice = "PIEDRA";
        }
        else if (comput == 1) {
            pcchoice = "PAPEL";
        }
        else {
            pcchoice = "TIJERAS";
        }
        console.log("La compu eligió " + pcchoice);
        return pcchoice
        }
    function playerchoice() {
            choice = choice.toUpperCase();
            console.log('Elegiste:' + choice);
            return choice;
        }
    function calcular() {
        if (choice == 'PIEDRA' && pcchoice == 'PIEDRA') {
             console.log('Empataste esta ronda');
        }

        else if (choice == 'PIEDRA' && pcchoice == 'PAPEL') {
            compuscore++;
            console.log('Perdiste esta ronda');
            return compuscore;
        }
        else if (choice == 'PIEDRA' && pcchoice == 'TIJERAS'){
            playerscore++;
            console.log('Ganaste esta ronda');
            return playerscore
        }
        else if (choice == 'PAPEL' && pcchoice == 'PAPEL') {
            console.log('Empataste esta ronda');
       }

       else if (choice == 'PAPEL' && pcchoice == 'TIJERAS') {
        compuscore++;
        console.log('Perdiste esta ronda');
        return compuscore;
       }
       else if (choice == 'PAPEL' && pcchoice == 'PIEDRA'){
        playerscore++;
        console.log('Ganaste esta ronda');
        return playerscore
       }
       else if (choice == 'TIJERAS' && pcchoice == 'TIJERAS') {
        console.log('Empataste esta ronda');
        }

        else if (choice == 'TIJERAS' && pcchoice == 'PIEDRA') {
            compuscore++;
            console.log('Perdiste esta ronda');
            return compuscore;
        }
        else {
            playerscore++;
            console.log('Ganaste esta ronda');
            return playerscore
        }                
        }
        playerchoice()
        computerchoice()
        calcular()
        seleccionjugador.textContent = "Elegiste: "+choice;
        seleccionpc.textContent = "La compu eligió: "+pcchoice;
        resultadojugador.textContent = "El jugador ha ganado "+playerscore+" rondas";
        resultadocompu.textContent = "La computadora ha ganado "+compuscore+" rondas";

        if (playerscore == 5){
            alert("El juego ha terminado");
            alert("Sí, sí, ganaste, ya te vimos...")
        }
        else if (compuscore == 5){
            alert("El juego ha terminado");
            alert("El ganador es: LA COMPU ALV JSJSJASJA")
        }
        }

resultados.appendChild(seleccionjugador);
resultados.appendChild(seleccionpc);
resultados.appendChild(resultadojugador);
resultados.appendChild(resultadocompu);

   

