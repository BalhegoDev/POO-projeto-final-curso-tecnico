import Livro from "./Livro.class";

export default class Aluno {
  private id_aluno: number;
  private matricula!: string;
  public name: string;
  public idade: number;
  private cpf: string;
  public livros_emprestados: Livro[] = [];
  public multaDevida: number = 0; 

  constructor(id: number, name: string, idade: number, cpf: string) {
    this.id_aluno = id;
    this.setMatricula(name);
    this.name = name;
    this.idade = idade;
    this.cpf = cpf;
  }

  private setMatricula(matricula: string): void {
    try {
      if (!matricula) {
        throw new Error("Digite algo válido!");
      }
      this.matricula = btoa(matricula);
    } catch (e) {
      console.log(e);
    }
  }

  public getMatricula(): string {
    return this.matricula;
  }

  public alugarLivro(livro: Livro): Object {
    if (livro.qntd_livro > 0) {
      this.livros_emprestados.push(livro);
      livro.qntd_livro--;
      return {
        matricula: this.matricula,
        name: this.name,
        livro: livro.titulo,
        data_emprestimo: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
      };
    } else {
      return {
        error: "Ops, quantidade de livro esgotada. Volte mais tarde!"
      };
    }
  }

  public devolverLivro(titulo_devolvido: string, dataDevolucao: string): Object {
    const livroIndex = this.livros_emprestados.findIndex(livro => livro.titulo === titulo_devolvido);
    if (livroIndex === -1) return { error: "Livro não encontrado entre os livros emprestados!" };

    const dataEsperada = new Date();
    const dataReal = new Date(dataDevolucao);

    const atrasoEmDias = (dataReal.getTime() - dataEsperada.getTime()) / (1000 * 3600 * 24);

    if (atrasoEmDias > 0) {
      this.multaDevida += atrasoEmDias * 2; 
    }

    this.livros_emprestados.splice(livroIndex, 1); 

    return {
      titulo: titulo_devolvido,
      matricula: this.matricula,
      nome_aluno: this.name,
      data_devolucao: dataDevolucao,
      multa: this.multaDevida
    };
  }

  // Paga a multa devida
  public pagarMulta(valor: number): string {
    if (valor >= this.multaDevida) {
      this.multaDevida = 0;
      return `${this.name} pagou a multa completa.`;
    } else {
      this.multaDevida -= valor;
      return `${this.name} pagou ${valor} de multa. Restam ${this.multaDevida} para pagar.`;
    }
  }
}
