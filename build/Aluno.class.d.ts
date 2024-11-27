import Livro from "./Livro.class";
export default class Aluno {
    private id_aluno;
    private matricula;
    name: string;
    idade: number;
    private cpf;
    livros_emprestados: Livro[];
    multaDevida: number;
    constructor(id: number, name: string, idade: number, cpf: string);
    private setMatricula;
    getMatricula(): string;
    alugarLivro(livro: Livro): Object;
    devolverLivro(titulo_devolvido: string, dataDevolucao: string): Object;
    pagarMulta(valor: number): string;
}
