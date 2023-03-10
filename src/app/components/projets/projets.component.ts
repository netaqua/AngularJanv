import { Component, OnInit } from '@angular/core';
import {Projet} from '../../entities/projet.entities';
import {Router} from '@angular/router';
import {ProjetService} from "../../services/projets.service";
import {Employe} from "../../entities/employe.entities";
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent  implements OnInit{
  projet: Projet|null=null;

  projets?: Projet[];

  idprojet :number=0;
  constructor(private projetService: ProjetService, private router: Router) {
  }
  ngOnInit(): void {}
  onSearch(value : any) {
    this.projet=null;
    this.projetService.getProjet(value.idprojet).subscribe(
      data => {this.projet=data},
        err=>{alert("projet introuvable")});
  }

  onSearchCout(value : any) {
    this.projetService.searchProjetCout(value.cout).subscribe(
      data => {this.projets=data},
      err=>{alert("projet introuvable")});
  }
  onNewProjet() {
    this.router.navigateByUrl('newProjet');
  }
  onProjetALL() {
    this.router.navigateByUrl('allProjet');
  }
  onDelete(p: Projet) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projetService.deleteProjet(p).subscribe(
        {
          next: data => {
            this.onSearch(p.idprojet);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(p: Projet) {
    this.router.navigateByUrl('editProjet/'+p.idprojet);
  }

}
