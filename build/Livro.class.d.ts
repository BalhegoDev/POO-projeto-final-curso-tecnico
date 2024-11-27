import Aluno from "./Aluno.class";
export default class Livro {
    id_livro: number;
    cod_livro: number;
    titulo: string;
    autores: string[];
    editora: string;
    disponibilidade: boolean;
    qntd_livro: number;
    aluno_responsavel: Aluno;
    constructor(id: number, codigo: number, titulo: string, autores: string[], editora: string, qntd_livro: number, aluno_responsavel: Aluno);
}
