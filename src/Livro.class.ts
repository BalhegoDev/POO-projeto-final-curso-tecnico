import Aluno from "./Aluno.class"

import { LivroInterface } from "./Interface.interface"

export default class Livro implements LivroInterface{
    public id_livro: number;
    public cod_livro: number;
    public titulo: string;
    public autores: string[];
    public editora: string;
    public disponibilidade: boolean;
    private aluno_responsavel: Aluno;

    constructor(id: number, codigo: number, titulo:string,
                autores: [string], editora: string, disponibilidade: boolean,
                aluno_responsavel: Aluno){
                this.id_livro = id;
                this.cod_livro = codigo;
                this.titulo = titulo;
                this.autores = autores;
                this.editora = editora;
                this.disponibilidade = disponibilidade;
                this.aluno_responsavel = aluno_responsavel;
    }
}