const nome = "Beatriz";
const idade = 16;
const programador = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof programador);

//---------------------------------

const nomeN = "Beatriz";
const idadeN = 16
const cidade = "Barcelona";
const altura = 1.67;
const temTatuagem = true;


//Forma 1 - interpolação de string
console.log(`Meu nome é ${nomeN}, tenho ${idadeN} anos, moro em ${cidade}, minha altura é ${altura} e tenho tatuagens? ${temTatuagem}.`)

//Forma 2 - concatenação de string
console.log("Meu nome é " + nomeN + ", tenho " + idadeN + "anos , moro em " + cidade +", minha altura é " + altura + " e tenho tatuagens? "+ temTatuagem +".")

//----------------------------------------------

console.log("10" + 5);
console.log('10' + 5);

//Boolean

const idadeN2 = 20;
let maiorIdade = true;

if (idadeN2 >=18){
    console.log("É maior de idade!")
}

else {
    console.log("É menor de idade!")
    maiorIdade = false 
    console.log(maiorIdade)
}
console.log(maiorIdade)

//--------------------------------------

let usuário = null;
console.log(usuário);
