import {Employe} from './employe.entities'
export interface Projet {
  idprojet: number;
  nomprojet: string;
  datedebut: string;
  datefin: string;
  idresponsable: Employe;
}
