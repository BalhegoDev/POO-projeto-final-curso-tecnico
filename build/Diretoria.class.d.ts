import Professor from "./Professor.class.js";
interface DemitidosInterface {
    [index: string]: Professor;
}
interface AtivosInterface {
    [index: string]: Professor;
}
export default class Diretoria {
    protected professoresDemitidos: DemitidosInterface;
    protected professoresAtivos: AtivosInterface;
    protected verificarProfessorAtivo(professor: Professor): boolean;
    protected verificarProfessorInativo(professor: Professor): boolean;
    protected demitirProfessor(professor: Professor): void;
    protected contratarProfessor(professor: Professor): void;
}
export {};
