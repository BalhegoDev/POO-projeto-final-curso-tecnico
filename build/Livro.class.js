"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    id_livro;
    cod_livro;
    titulo;
    autores;
    editora;
    disponibilidade;
    qntd_livro;
    aluno_responsavel;
    constructor(id, codigo, titulo, autores, editora, qntd_livro, aluno_responsavel) {
        this.id_livro = id;
        this.cod_livro = codigo;
        this.titulo = titulo;
        this.autores = autores;
        this.editora = editora;
        this.qntd_livro = qntd_livro;
        this.aluno_responsavel = aluno_responsavel;
    }
}
exports.default = Livro;
