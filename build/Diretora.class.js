"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Diretoria_class_js_1 = __importDefault(require("./Diretoria.class.js"));
class Diretora extends Diretoria_class_js_1.default {
    nome;
    idade;
    constructor(nome, idade) {
        super();
        this.nome = nome;
        this.idade = idade;
    }
    getProfessoresDemitidos() {
        return this.professoresDemitidos;
    }
    getProfessoresAtivos() {
        return this.professoresAtivos;
    }
    contratar(professor) {
        this.contratarProfessor(professor);
    }
    demitir(professor) {
        this.demitirProfessor(professor);
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getIdade() {
        return this.idade;
    }
}
exports.default = Diretora;
