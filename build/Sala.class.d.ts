import Professor from "./Professor.class";
import Turma from "./Turma.class";
import Diretora from "./Diretora.class";
export default class Sala {
    private professor;
    intervalo: number;
    tempoDeAula: number;
    turma_em_aula: Turma[];
    diretora: Diretora;
    constructor(professor: Professor, intervalo: number, tempoDeAula: number, diretora: Diretora);
    recreiar(): void;
    adicionarTurma(turma: Turma): void;
    getAlunos(): Turma[];
    getTempoRestante(): number;
    getProfessor(): Professor;
    setProfessor(professor: Professor): void;
}
