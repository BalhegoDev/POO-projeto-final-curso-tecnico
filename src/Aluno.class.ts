export default class Aluno{
    private id_aluno: number;
    private matricula: string;
    public name: string;
    public idade: number;
    private cpf: string;

    constructor(id: number, matricula: string,
                name:string, idade: number, cpf: string){
                    this.id_aluno = id;
                    this.matricula = matricula;
                    this.name = name;
                    this.idade = idade;
                    this.cpf = cpf;
                }
                
                public assistirAula(): void {
                    console.log(`${this.name} está assistindo à aula.`);
                }
            
                public merendar(): void {
                    console.log(`${this.name} está merendando.`);
                }
            
                public alugarLivro(): void {
                    console.log(`${this.name} alugou um livro.`);
                }
            
                public devolverLivro(): void {
                    console.log(`${this.name} devolveu um livro.`);
                }
            }