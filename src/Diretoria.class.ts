import Professor from "./Professor.class.js";
import { ProfessorInterface } from "./Interface.interface.js";


interface DemitidosInterface {
    [index:string]: Professor;
}

interface AtivosInterface {
    [index:string]: Professor;
}

export default class Diretoria{

    protected professoresDemitidos!:DemitidosInterface;
    protected professoresAtivos!:AtivosInterface;

    protected verificarProfessorAtivo(professor:Professor):boolean{
        if(this.professoresAtivos[professor.getMatricula()]){
            return true;
        }else{
            return false;
        }
    }

    protected verificarProfessorInativo(professor:Professor):boolean{
        if(this.professoresDemitidos[professor.getMatricula()]){
            return true;
        }else{
            return false;
        }
    }

    protected demitirProfessor(professor:Professor){
        this.professoresDemitidos[professor.getMatricula()] = professor;
        if(this.verificarProfessorAtivo(professor)) delete this.professoresAtivos[professor.getMatricula()];
    }

    protected contratarProfessor(professor:Professor){
        try{
            if(this.verificarProfessorInativo(professor)) throw new Error("Professor já está demitido");
            this.professoresAtivos[professor.getMatricula()] = professor;
        }catch(e){
            console.log(e);
        }
    }    
}