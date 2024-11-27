"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    id_aluno;
    matricula;
    name;
    idade;
    cpf;
    livros_emprestados = [];
    multaDevida = 0;
    constructor(id, name, idade, cpf) {
        this.id_aluno = id;
        this.setMatricula(name);
        this.name = name;
        this.idade = idade;
        this.cpf = cpf;
    }
    setMatricula(matricula) {
        try {
            if (!matricula) {
                throw new Error("Digite algo válido!");
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
    alugarLivro(livro) {
        if (livro.qntd_livro > 0) {
            this.livros_emprestados.push(livro);
            livro.qntd_livro--;
            return {
                matricula: this.matricula,
                name: this.name,
                livro: livro.titulo,
                data_emprestimo: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
            };
        }
        else {
            return {
                error: "Ops, quantidade de livro esgotada. Volte mais tarde!"
            };
        }
    }
    devolverLivro(titulo_devolvido, dataDevolucao) {
        const livroIndex = this.livros_emprestados.findIndex(livro => livro.titulo === titulo_devolvido);
        if (livroIndex === -1)
            return { error: "Livro não encontrado entre os livros emprestados!" };
        const dataEsperada = new Date();
        const dataReal = new Date(dataDevolucao);
        const atrasoEmDias = (dataReal.getTime() - dataEsperada.getTime()) / (1000 * 3600 * 24);
        if (atrasoEmDias > 0) {
            this.multaDevida += atrasoEmDias * 2;
        }
        this.livros_emprestados.splice(livroIndex, 1);
        return {
            titulo: titulo_devolvido,
            matricula: this.matricula,
            nome_aluno: this.name,
            data_devolucao: dataDevolucao,
            multa: this.multaDevida
        };
    }
    // Paga a multa devida
    pagarMulta(valor) {
        if (valor >= this.multaDevida) {
            this.multaDevida = 0;
            return `${this.name} pagou a multa completa.`;
        }
        else {
            this.multaDevida -= valor;
            return `${this.name} pagou ${valor} de multa. Restam ${this.multaDevida} para pagar.`;
        }
    }
}
exports.default = Aluno;
