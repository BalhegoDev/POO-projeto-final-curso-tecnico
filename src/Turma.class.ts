import Professor from "./Professor.class.js";
import Aluno from "./Aluno.class.js";
import Diretora from "./Diretora.class.js";

export default class Turma{
    public numero_turma: number
    public turma:string;
    private professores:Professor[];
    private alunos!:Aluno[];
    private diretora:Diretora;

    constructor(turma:string,professores:Professor[],alunos:Aluno[], nmr_turma: number,diretora:Diretora){
        this.turma = turma;
        this.professores = professores;
        this.numero_turma = nmr_turma
        this.diretora = diretora;
    }

    setAluno(aluno:Aluno):void {
        this.alunos.push(aluno);
    }

    setAlunos(aluno:Aluno[]):void {
        this.alunos.concat(aluno);
    }

    setProfessor(professor:Professor):void {
        if(this.diretora.getProfessoresAtivos()[professor.getMatricula()]) this.professores.push(professor);
        else{
            console.log("Ops, me parece que esse professor não trabalho na escola...");
        }
    }

    getProfessores():Professor[]
    {
        return this.professores;
    }


}