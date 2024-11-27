import Professor from "./Professor.class.js";
import Aluno from "./Aluno.class.js";
import Diretora from "./Diretora.class.js";
export default class Turma {
    numero_turma: number;
    turma: string;
    private professores;
    private alunos;
    private diretora;
    constructor(turma: string, professores: Professor[], alunos: Aluno[], nmr_turma: number, diretora: Diretora);
    setAluno(aluno: Aluno): void;
    setAlunos(aluno: Aluno[]): void;
    setProfessor(professor: Professor): void;
    getProfessores(): Professor[];
}
