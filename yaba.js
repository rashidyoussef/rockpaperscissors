let rock = 1;
let paper = 2;
let scissors = 3;

let comput = Math.floor(Math.random()*3);
console.log(comput);

if (comput == 0) {
    console.log('La computadora eligió Piedra');
}
else if (comput == 1) {
    console.log('La computadora eligió Papel');
    }
else {
    console.log('La computadora eligió Papel');
}
