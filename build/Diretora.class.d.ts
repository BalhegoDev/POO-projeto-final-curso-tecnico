import Diretoria from "./Diretoria.class.js";
import Professor from "./Professor.class.js";
export default class Diretora extends Diretoria {
    private nome;
    private idade;
    constructor(nome: string, idade: number);
    getProfessoresDemitidos(): any;
    getProfessoresAtivos(): any;
    contratar(professor: Professor): void;
    demitir(professor: Professor): void;
    setNome(nome: string): void;
    getNome(): string;
    setIdade(idade: number): void;
    getIdade(): number;
}
