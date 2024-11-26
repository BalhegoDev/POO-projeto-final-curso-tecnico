import Aluno from "./Aluno.class";
import Livro from "./Livro.class";

export default class Biblioteca{
    public livros: Livro;
    private alunos_registrados: Aluno;

    constructor(livros: Livro, alunos: Aluno){
        this.alunos_registrados = alunos;
        this.livros = livros;
    }

}