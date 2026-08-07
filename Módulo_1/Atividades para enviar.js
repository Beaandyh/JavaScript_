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