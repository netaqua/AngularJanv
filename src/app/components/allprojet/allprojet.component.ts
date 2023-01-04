import { Component, OnInit} from '@angular/core';
import {Projet} from "../../entities/projet.entities";
import {ProjetService} from "../../services/projets.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-allprojet',
  templateUrl: './allprojet.component.html',
  styleUrls: ['./allprojet.component.css']
})
export class AllprojetComponent implements OnInit{

  projets?: Projet[];

  idprojet :number=0;
  constructor(private projetService: ProjetService, private router: Router) {
  }
  ngOnInit(): void {}
  onSearch() {
    this.projetService.searchProjet().subscribe(
      data => {this.projets = data},
      err=>{alert("projet introuvable")});
  }


  onEdit(p: Projet) {
    this.router.navigateByUrl('editProjet/'+p.idprojet);
  }

}
