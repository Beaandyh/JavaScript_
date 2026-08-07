//#region Aula do dia 07/08/26
console.log("----------Atividade 1----------")
const remy = 20

console.log(remy >= 18);


console.log("----------Atividade 2----------")
const a = 10
const b = 10

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //Resto da divisão

console.log("----------Atividade 3----------")
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b); //Diferente

console.log("----------Atividade 4----------")
console.log("----------Para entregar----------")
const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2); 
console.log(idade1 === idade2); 
console.log(idade1 !== idade2);

console.log("----------Atividade 5----------")

const idade3 = 17;
const idade4 = 15;

//Operador lógico AND(e)
console.log(idade3 > 18 && idade4 > 18); //Todas são verdadeiras 
//Operador lógico OR(ou)
console.log(idade3 > 18 || idade4 > 18); //Uma precisa ser verdadeira 
//Operador lógico NOT(não)
console.log(!(idade3>18));//Inverte 

console.log("----------Atividade 6----------")
const idade5 = 25;
const matrículaAtiva = true;

const podeComprar = idade5 >= 18 && matrículaAtiva;

console.log(podeComprar);

console.log("----------Atividade 7----------")
//Operadores de incremento e decremento
let número = 10;

console.log(número++); //10//Pega o número da primeira vez (atual), no segundo ele começa a somar 
console.log(número); //11
console.log(++número); //12

console.log(número--) //12
console.log(número); //11
console.log(--número); //10

console.log("----------Atividade 8----------")
console.log("----------Exercício 8.1 para entregar----------")
const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); 
console.log(x === y); 
console.log(x !== y);

console.log("----------Exercício 8.2 para entregar----------")
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);

console.log("----------Atividade 9----------")
console.log("----------Exercício 9.1 para entregar----------")
const dataNascimento = new Date("2009-11-03");
const ativo = true;

const dezoitoAnosEmMilissegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;
const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilissegundos && ativo;

console.log(podeAcessar);


//#endregion
