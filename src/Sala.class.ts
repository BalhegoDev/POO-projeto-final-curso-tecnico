import Aluno from "./Aluno.class";
import Professor from "./Professor.class";
import Turma from "./Turma.class";
import Diretora from "./Diretora.class";

export default class Sala{
    private professor: Professor;
    public intervalo:number;
    public tempoDeAula:number;
    public turma_em_aula!:Turma[];
    diretora:Diretora;

    constructor(professor: Professor, intervalo:number,tempoDeAula:number,diretora:Diretora){
        this.professor = professor;
        this.intervalo = intervalo;
        this.tempoDeAula = tempoDeAula;
        this.diretora = diretora;
    }

    recreiar(){
        try{
            if( this.tempoDeAula >= this.intervalo){
                this.tempoDeAula -= this.intervalo;
                return;
            }
            throw new Error("Tempo de aula excedido. Não tem como fazer a hora do lanchinho !!!");
        }
        catch(e){
            console.log(e);
        }
    }

    public adicionarTurma(turma:Turma){
        this.turma_em_aula.push(turma);
    }

    getAlunos():Turma[]
    {
        return this.turma_em_aula;
    }

    public getTempoRestante():number
    {
        return this.tempoDeAula;
    }

    public getProfessor():Professor
    {
        return this.professor;
    }

    public setProfessor(professor:Professor){
        
    }
}