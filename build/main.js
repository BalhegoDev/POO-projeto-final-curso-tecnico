"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
//importação das classes
const Aluno_class_1 = __importDefault(require("./Aluno.class"));
const prompt = (0, prompt_sync_1.default)();
const alunos = [];
let escolhaPrincipal = 0;
console.log("Olá, seja bem-vindo à escola do professor Raimundo ! ");
console.log("O que deseja fazer ");
while (true) {
    escolhaPrincipal = Number(prompt("1. Cadastrar-se como aluno"));
    escolhaPrincipal = Number(prompt(("2. Cadastrar-se como Diretor(a)")));
    escolhaPrincipal = Number(prompt(("3. Cadastrar-se como Professor(a)")));
    if (escolhaPrincipal == 1) {
        let nome = prompt("Digite o seu nome: ");
        let idade = Number(prompt("Digite a sua idade"));
        let cpf = prompt("Digite o seu cpf");
        alunos.push(new Aluno_class_1.default(alunos.length + 1, nome, idade, cpf));
    }
}
