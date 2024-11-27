import Diretoria from "./Diretoria.class.js";
import Professor from "./Professor.class.js";

export default class Diretora extends Diretoria {
    private nome:string;
    private idade:number;

    constructor(nome:string,idade:number){
        super();
        this.nome = nome;
        this.idade = idade;
    }

    getProfessoresDemitidos():any
    {
        return this.professoresDemitidos;
    }

    getProfessoresAtivos():any
    {
        return this.professoresAtivos;
    }

    contratar(professor:Professor){
        this.contratarProfessor(professor);
    }

    demitir(professor:Professor){
        this.demitirProfessor(professor);
    }

    setNome(nome:string){
        this.nome = nome;
    }

    getNome():string
    {
        return this.nome;
    }

    setIdade(idade:number){
        this.idade = idade;
    }

    getIdade():number
    {
        return this.idade;
    }
}