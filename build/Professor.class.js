"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Professor {
    matricula;
    nome;
    idade;
    cpf;
    constructor(nome, idade, cpf) {
        this.setMatricula(nome);
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    setMatricula(matricula) {
        try {
            if (!matricula) {
                throw new Error("Digite algo válido !");
                return;
            }
            this.matricula = btoa(matricula);
        }
        catch (e) {
            console.log(e);
        }
    }
    getMatricula() {
        return this.matricula;
    }
    getNome() {
        return this.nome;
    }
}
exports.default = Professor;
