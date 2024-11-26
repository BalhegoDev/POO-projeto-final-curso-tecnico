import Aluno from "./Aluno.class";
import Professor from "./Professor.class";
import Turma from "./Turma.class";

export default class Sala{
    private professor: Professor;
    private alunos: Aluno[];
    public intervalo:number;
    public tempoDeAula:number;
    public turma_em_aula!:Turma[];


    constructor(professor: Professor, aluno: Aluno[], intervalo:number,tempoDeAula:number){
        this.professor = professor;
        this.alunos = aluno;
        this.intervalo = intervalo;
        this.tempoDeAula = tempoDeAula;
    }

    recreiar(){
        try{
            if( this.tempoDeAula >= this.intervalo){
                this.tempoDeAula -= this.intervalo;
                return;
            }
            throw new Error("Tempo de aula excedido. Não tem como fazer a hora do lanchinho !!!");
            console.log(`Restam ${this.tempoDeAula}min de aula.`);
        }
        catch(e){
            console.log(e);
        }
    }

    public adicionarTurma(turma:Turma){
        this.turma_em_aula.push(turma);
    }

    getTempoRestante():number
    {
        return this.tempoDeAula;
    }

    getProfessor():Professor
    {
        return this.professor;
    }

    setProfessor(professor:Professor){
        this.professor = professor;
    }

    setAlunos(aluno:Aluno):void {
        this.alunos.push(aluno);
    }

    getAlunos():Aluno[]
    {
        return this.alunos;
    }
    
}