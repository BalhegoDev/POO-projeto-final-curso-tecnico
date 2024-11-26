import Materia from "./Materia.class"

export default class Professor{
    private matricula: string
    private nome:string
    private idade: number
    private materias: Materia[];
    private cpf: string

    constructor(matricula: string, nome: string,
                idade: number, materias: [],
                cpf: string){
        this.matricula = matricula
        this.nome = nome
        this.idade = idade
        this.materias = materias
        this.cpf = cpf
    }

    public darAula(): number{
        return 0;
    }

    
}