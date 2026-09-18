//Criar Arquivo
const fs = require("fs/promises");

async function criarArquivo(){
    const livros = [
        {
            id: 1,
            titulo: "Invicto",
            autor: "Brooke Mars"
        },
        {
            id: 2,
            titulo: "Harry Potter",
            autor: "J.K. Rowling"
        }
    ];
    //Criar o arquivo

    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo criado com sucesso.");
}
//listar Livro
async function listarLivros() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar para objeto
    const livros = JSON.parse(dados);

    //exibir no console(no futuro será seu site)
    console.log(livros);
}
//Adicionar Livro
async function adicionarLivro(){
//Ler o arquivo
const dados = await fs.readFile("livros.json", "utf-8");

//Transformar (parse)
const livros = JSON.parse(dados);

//Add o livro (push)
livros.push({
    id: 3,
    titulo: "Jogos Vorazes",
    autor: "Suzanne Collins" 
});

//Retransformar o json
await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

//"Livro add com sucesso"
console.log("Livro adicionado com sucesso!");

}
//Alterar Livros
async function alterarLivro(id) {
//Precisamos saber o livro 1º

//Ler o arquivo
const dados = await fs.readFile("livros.json", "utf-8");

//Trasnformar o arquivo JSON --> obj
const livros = JSON.parse(dados);

//Descobri o livro 
   const livro = livros.find((livro) => livro.id === id);

  //lógica - se não existir 
  //! => é como negação, tipo um false
    if (!livro){
        console.log("Livro não encontrado.");
        return;
    }

//Altera o livro
livro.autor = "Beatriz Andrade";

//Retransformar obj --> JSON
await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

//Falar que deu certo
console.log("Livro alterado com sucesso!")


    
}
//Deletar 
async function deletarLivro(id) {
//Ler arquivo
const dados = await fs.readFile("livros.json", "utf-8");

//Transformar o arquivo
const livros = JSON.parse(dados);

//lógica - se não existir 
  //! => é como negação, tipo um false
    if (!livros) {
        console.log("Lista de livros não encontrada.");
        return;
};

//Procurar o livro que será deletado (if)
const livrosAtualizados = livros.filter((livro) => livro.id !==id );

if (livrosAtualizados.lenght === livros.lenght) {
    console.log("Livro", id, "não encontrado!");
    return;
}

//Retransformar 
await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados, null, 2));

//Mensagem
console.log("Livro deletado com sucesso!");
}

//Função executar 
async function executar() {
    await criarArquivo();

    await listarLivros();

    await adicionarLivro();

    await listarLivros();

    await alterarLivro(3);

    await listarLivros();

    await deletarLivro(2);

    await listarLivros();
}

//Chamar
executar();

 