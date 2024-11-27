import Aluno from "./Aluno.class";
import Livro from "./Livro.class";

export default class Biblioteca {
  public livros: Livro[];
  private alunos_devedores: { aluno: Aluno, multa: number }[]; 
  public alunos: Aluno[];

  constructor(livros: Livro[], alunos: Aluno[]) {
    this.livros = livros;
    this.alunos_devedores = [];
    this.alunos = alunos
  }

  public adicionarDevedor(aluno: Aluno, multa: number): void {
    this.alunos_devedores.push({ aluno, multa });
  }

  public removerDevedor(aluno: Aluno): void {
    const index = this.alunos_devedores.findIndex(devedor => devedor.aluno === aluno);
    if (index !== -1) {
      this.alunos_devedores.splice(index, 1);
    }
  }

  public adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }


  public adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  public processarDevolucao(aluno: Aluno, titulo_devolvido: string, dataDevolucao: string): void {
    const resultado = aluno.devolverLivro(titulo_devolvido, dataDevolucao);
    
    if (aluno.multaDevida > 0) {
      this.adicionarDevedor(aluno, aluno.multaDevida);
      console.log(`${aluno.name} deve R$ ${aluno.multaDevida} pela devolução do livro ${titulo_devolvido}.`);
    } else {
      console.log(`${aluno.name} devolveu o livro ${titulo_devolvido} sem multa.`);
      this.removerDevedor(aluno);
    }
    
    console.log(resultado);
  }
}
