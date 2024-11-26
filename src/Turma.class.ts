import Professor from "./Professor.class.js";
import Aluno from "./Aluno.class.js";

export default class Turma{
    public numero_turma: number
    public turma:string;
    public professores:Professor[];
    public alunos:Aluno[];

    constructor(turma:string,professores:Professor[],alunos:Aluno[], nmr_turma: number){
        this.turma = turma;
        this.professores = professores;
        this.alunos = alunos;
        this.numero_turma = nmr_turma
    }
}