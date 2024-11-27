"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    livros;
    alunos_devedores;
    alunos;
    constructor(livros, alunos) {
        this.livros = livros;
        this.alunos_devedores = [];
        this.alunos = alunos;
    }
    adicionarDevedor(aluno, multa) {
        this.alunos_devedores.push({ aluno, multa });
    }
    removerDevedor(aluno) {
        const index = this.alunos_devedores.findIndex(devedor => devedor.aluno === aluno);
        if (index !== -1) {
            this.alunos_devedores.splice(index, 1);
        }
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    processarDevolucao(aluno, titulo_devolvido, dataDevolucao) {
        const resultado = aluno.devolverLivro(titulo_devolvido, dataDevolucao);
        if (aluno.multaDevida > 0) {
            this.adicionarDevedor(aluno, aluno.multaDevida);
            console.log(`${aluno.name} deve R$ ${aluno.multaDevida} pela devolução do livro ${titulo_devolvido}.`);
        }
        else {
            console.log(`${aluno.name} devolveu o livro ${titulo_devolvido} sem multa.`);
            this.removerDevedor(aluno);
        }
        console.log(resultado);
    }
}
exports.default = Biblioteca;
