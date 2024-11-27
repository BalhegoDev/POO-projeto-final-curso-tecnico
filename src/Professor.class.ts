export default class Professor{
    private matricula!: string
    private nome:string
    private idade: number
    private cpf: string

    constructor(nome: string,idade: number, cpf: string){
        this.setMatricula(nome);
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    private setMatricula(matricula:string):void{
        try{
            if(!matricula){
                throw new Error("Digite algo válido !");
                return;
            }
            this.matricula = btoa(matricula);
        }catch(e){
            console.log(e);
        }
    }

    public getMatricula():string
    {
        return this.matricula;
    }

    public getNome():string
    {
        return this.nome;
    }

    

    
}