import PromptSync from "prompt-sync";

//importação das classes
import Aluno from "./Aluno.class";
import Biblioteca from "./Biblioteca.class";
import Livro from "./Livro.class";
import Diretora from "./Diretora.class";
import Professor from "./Professor.class";
import Turma from "./Turma.class";
import Sala from "./Sala.class";

const prompt = PromptSync();
const alunos:Aluno[] = [];


let escolhaPrincipal:number = 0;



console.log("Olá, seja bem-vindo à escola do professor Raimundo ! ");
console.log("O que deseja fazer ");


while(true){
    escolhaPrincipal = Number(prompt("1. Cadastrar-se como aluno"));
    escolhaPrincipal = Number(prompt(("2. Cadastrar-se como Diretor(a)")));
    escolhaPrincipal = Number(prompt(("3. Cadastrar-se como Professor(a)")));

    if(escolhaPrincipal == 1){
        let nome:string = prompt("Digite o seu nome: ");
        let idade:number = Number(prompt("Digite a sua idade"));
        let cpf:string = prompt("Digite o seu cpf");

        alunos.push(new Aluno(alunos.length + 1,nome,idade,cpf))
        

    }

    
}