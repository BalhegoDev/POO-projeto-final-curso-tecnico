"use strict";
//nome, carga horaria, conteúdo
Object.defineProperty(exports, "__esModule", { value: true });
class Materia {
    nome;
    carga_horaria;
    conteudo;
    constructor(nome, ch, conteudo) {
        this.nome = nome;
        this.carga_horaria = ch;
        this.conteudo = conteudo;
    }
}
exports.default = Materia;
