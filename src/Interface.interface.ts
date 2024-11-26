import Materia from "./Materia.class";

export interface LivroInterface {
    id_livro:number;
    cod_livro:number;
    titulo:string;
    autores:string[];
    editora:string;
    disponibilidade:boolean;
}

export interface ProfessorInterface {
    matricula: string
    nome:string
    idade: number
    materias:Materia[];
    cpf: string
}