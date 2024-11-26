//nome, carga horaria, conteúdo

export default class Materia {
    public nome!: string;
    public carga_horaria!:number;
    public conteudo!: string;

    constructor(nome: string, ch: number, conteudo: string){
        this.nome = nome;
        this.carga_horaria = ch;
        this.conteudo = conteudo;
    }
}