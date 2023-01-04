import { Component,Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Projet} from '../../entities/projet.entities';
import {ProjetService} from "../../services/projets.service";
@Component({
  selector: 'app-editprojet',
  templateUrl: './editprojet.component.html',
  styleUrls: ['./editprojet.component.css']
})
export class EditprojetComponent implements OnInit{

  projetFormGroup?: FormGroup;
  submitted=false;
  @Input() projet?:Projet;
  deleted=false;
  constructor(private projetService: ProjetService, private fb:
    FormBuilder) {
  }
  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      idprojet: [this.projet?.idprojet],
      nomproj: [this.projet?.nomproj,[Validators.required]],
      datedebut: [this.projet?.datedebut, Validators.required],
      datefin :[this.projet?.datefin,[Validators.required]],
      cout :[this.projet?.cout,[Validators.required]],
      idresponsable: [this.projet?.idresponsable,[Validators.required]]
    });
  }
  onUpdateProjet(): void {
    this.submitted = true;
    if (this.projetFormGroup?.invalid) {
      return;
    }
    let projetmaj:Projet=this.projetFormGroup?.value;
    if(this.projet) {//permet de s'assurer que la commande a bien une valeur et évite les avertissements "possiblement indéfini"
      projetmaj.idresponsable = this.projet.idresponsable; //car le formulaire ne donne une valeur qu' aux champs propres du projet
      this.projetService.updateProjet(projetmaj).subscribe({
        next: data => alert('maj ok'),
        error : err => alert(err.headers.get("error"))
      })
    }
  }
  /*
  onDeleteProjet() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projetService.deleteProjet(this.projetFormGroup?.value).subscribe(data => {
          alert('effacement ok');
          this.deleted=true;
        },
        err => {alert(err.headers.get("error"));
        });
    }
  }*/
}
