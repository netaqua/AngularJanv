import { Component, OnInit } from '@angular/core';
import {ProjetService} from "../../services/projets.service";
import {Router} from "@angular/router";
import {Projet} from "../../entities/projet.entities";
import {Employe} from "../../entities/employe.entities";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit{

  employes?:Employe[];
  projets?:Projet[];
  projet?:Projet;
  constructor(private projetService: ProjetService) {
  }
  ngOnInit(): void {

  }
  onSearch(value: any) {
    this.projetService.searchProjets(value.nomproj).subscribe(
      data => {
        this.projets = data
      });
  }
}
