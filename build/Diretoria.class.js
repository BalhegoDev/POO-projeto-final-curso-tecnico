"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Diretoria {
    professoresDemitidos;
    professoresAtivos;
    verificarProfessorAtivo(professor) {
        if (this.professoresAtivos[professor.getMatricula()]) {
            return true;
        }
        else {
            return false;
        }
    }
    verificarProfessorInativo(professor) {
        if (this.professoresDemitidos[professor.getMatricula()]) {
            return true;
        }
        else {
            return false;
        }
    }
    demitirProfessor(professor) {
        this.professoresDemitidos[professor.getMatricula()] = professor;
        if (this.verificarProfessorAtivo(professor))
            delete this.professoresAtivos[professor.getMatricula()];
    }
    contratarProfessor(professor) {
        try {
            if (this.verificarProfessorInativo(professor))
                throw new Error("Professor já está demitido");
            this.professoresAtivos[professor.getMatricula()] = professor;
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = Diretoria;
