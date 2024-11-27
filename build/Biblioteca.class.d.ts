import Aluno from "./Aluno.class";
import Livro from "./Livro.class";
export default class Biblioteca {
    livros: Livro[];
    private alunos_devedores;
    alunos: Aluno[];
    constructor(livros: Livro[], alunos: Aluno[]);
    adicionarDevedor(aluno: Aluno, multa: number): void;
    removerDevedor(aluno: Aluno): void;
    adicionarAluno(aluno: Aluno): void;
    adicionarLivro(livro: Livro): void;
    processarDevolucao(aluno: Aluno, titulo_devolvido: string, dataDevolucao: string): void;
}
