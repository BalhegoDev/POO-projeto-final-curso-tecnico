import Aluno from "./Aluno.class";

export default class Livro {
  public id_livro: number;
  public cod_livro: number;
  public titulo: string;
  public autores: string[];
  public editora: string;
  public disponibilidade!: boolean;
  public qntd_livro: number;
  public aluno_responsavel: Aluno;

  constructor(
    id: number,
    codigo: number,
    titulo: string,
    autores: string[],
    editora: string,
    qntd_livro: number,
    aluno_responsavel: Aluno
  ) {
    this.id_livro = id;
    this.cod_livro = codigo;
    this.titulo = titulo;
    this.autores = autores;
    this.editora = editora;
    this.qntd_livro = qntd_livro;
    this.aluno_responsavel = aluno_responsavel;
  }
}
