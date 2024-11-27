"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turma {
    numero_turma;
    turma;
    professores;
    alunos;
    diretora;
    constructor(turma, professores, alunos, nmr_turma, diretora) {
        this.turma = turma;
        this.professores = professores;
        this.numero_turma = nmr_turma;
        this.diretora = diretora;
    }
    setAluno(aluno) {
        this.alunos.push(aluno);
    }
    setAlunos(aluno) {
        this.alunos.concat(aluno);
    }
    setProfessor(professor) {
        if (this.diretora.getProfessoresAtivos()[professor.getMatricula()])
            this.professores.push(professor);
        else {
            console.log("Ops, me parece que esse professor não trabalho na escola...");
        }
    }
    getProfessores() {
        return this.professores;
    }
}
exports.default = Turma;
