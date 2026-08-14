console.log("----------Atividade 1----------")
console.log("----------Teste de idade----------")
const idade = 16
console.log(idade >=18)

if (idade >=18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

console.log("----------Atividade 2----------");
console.log("----------Teste de notas----------");
const nota = 6.9999999999999; 

const notaArr = Math.floor(nota*100)/100

console.log(notaArr); 

if (nota >= 7) {
    console.log("Você está aprovado!");
} else if (nota < 7 && nota >= 4) {
    console.log("Você está de recuperação!");
} else {
    console.log("Você foi reprovado!");
}

console.log("----------Atividade 3----------")
console.log("----------Condições compostas ----------")
const senha = 20
const ativo = true;
const email = "dddgmail.com"

if (senha === 18 && email === "dddgmail.com" && ativo){
    console.log("Usuário autorizado!")
}
else {
    console.log("Sai fora do nosso site")
}

console.log("----------Atividade 4----------")
console.log("----------Switch case----------")
const dia = 6
switch(dia){
    case 1:
        console.log("Domingo")
        break;

    case 2:
        console.log("Segunda")
        break;

    case 3:
        console.log("Terça")
        break;

    case 4:
        console.log("Quarta")
        break;

    case 5:
        console.log("Quinta")
        break;

    case 6:
        console.log("Sexta")
        break;

    case 7:
        console.log("Sábado")
        break;

        default:
            console.log("Dia não encontrado!");
}

//Quando usar o switch case?
//- qd temos muitas condições p verificar
//- qd temos 1 variável que pode ter mts valores diferentes
//- qd queremos deixar o código + legível 

console.log("----------Atividade 5----------")
console.log("----------Operador ternário----------")
const idade2 = 20

const mensagem = idade2 >= 18 ? "Maior" : "Menor";
//constante = condição ? valor se true :valor se else
console.log(mensagem);

console.log("----------Atividade 6----------")
console.log("----------Laços----------")
console.log("----------while----------")
//while(enquanto for verdade keep), for

let contador = 1;
while(contador<=6){
}

console.log("----------for----------")
//for(iniciação; condição; incremento)
for(let i = 1; i <= 5; i++){
    console.log(i)
}
//for...of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];//simplificado pra array
for(const fruta of frutas){
    console.log(fruta);
}
console.log("----------for(pt2----------") //tradicional
for(let i=0; i <frutas.length; i++){
    console.log(frutas[i]);

}
