import {Component, EventEmitter, Input, OnInit, Output} from
    '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Projet} from '../../entities/projet.entities';
import {formatDate} from '@angular/common';
import {ProjetService} from "../../services/projets.service";
@Component({
  selector: 'app-newprojet',
  templateUrl: './newprojet.component.html',
  styleUrls: ['./newprojet.component.css']
})
export class NewprojetComponent implements OnInit{
  @Input() empact? : FormGroup;
  @Output() newProjet = new EventEmitter<Projet>();
  projetFormGroup?: FormGroup;

  submitted = false;
  pj?:Projet;
  constructor(private fb: FormBuilder, private projetService:
    ProjetService) { }
  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      nomproj : [''],
      datedebut :[formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      datefin :[formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      cout: ['0'],
    });
  }
  onSaveProjet(): void {
    this.submitted = true;
    var npj=this.projetFormGroup?.value;
    npj.idresponsable=this.empact?.value;
    // this.comfactService.save(this.comfactFormGroup?.value,this.cliact?.value);
    this.projetService.save(npj, npj.idresponsable).
    subscribe(data => {alert('sauvegarde ok');this.pj=data;this.newProjet.emit(data) },
      err => {
        alert(err.headers.get("error"));
      });
  }
}
