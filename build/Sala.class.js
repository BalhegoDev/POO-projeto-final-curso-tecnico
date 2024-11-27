"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sala {
    professor;
    intervalo;
    tempoDeAula;
    turma_em_aula;
    diretora;
    constructor(professor, intervalo, tempoDeAula, diretora) {
        this.professor = professor;
        this.intervalo = intervalo;
        this.tempoDeAula = tempoDeAula;
        this.diretora = diretora;
    }
    recreiar() {
        try {
            if (this.tempoDeAula >= this.intervalo) {
                this.tempoDeAula -= this.intervalo;
                return;
            }
            throw new Error("Tempo de aula excedido. Não tem como fazer a hora do lanchinho !!!");
        }
        catch (e) {
            console.log(e);
        }
    }
    adicionarTurma(turma) {
        this.turma_em_aula.push(turma);
    }
    getAlunos() {
        return this.turma_em_aula;
    }
    getTempoRestante() {
        return this.tempoDeAula;
    }
    getProfessor() {
        return this.professor;
    }
    setProfessor(professor) {
    }
}
exports.default = Sala;
