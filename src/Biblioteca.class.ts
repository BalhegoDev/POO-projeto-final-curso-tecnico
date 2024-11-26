import Aluno from "./Aluno.class";
import Livro from "./Livro.class";

export default class Biblioteca{
    public livros: Livro;
    private alunos_registrados: Aluno;

    constructor(livros: Livro, alunos: Aluno){
        this.alunos_registrados = alunos;
        this.livros = livros;
    }

    public remover_devedor(aluno:string):void{
        console.log(`${this.alunos_registrados} Devedor removido.`);
    }
    
    public adicionar_devedor(aluno:Aluno):void{
        console.log(`${this.alunos_registrados} Devedor adicionado.`);
}

}