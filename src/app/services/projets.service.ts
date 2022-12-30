import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Projet} from '../entities/projet.entities';
import {Employe} from '../entities/employe.entities';
import {formatDate} from '@angular/common';
@Injectable({providedIn:"root"})
export class ProjetService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  deleteComfact(p: Projet): Observable<void>{
    return this.http.delete<void>(this.host + '/projets/' + p.idprojet);
  }
  save(p: Projet,emp:Employe): Observable<Projet>{
    p.idresponsable = emp;
    return this.http.post<Projet>(this.host + '/projets/',p);
  }
  updateProjet(p: Projet): Observable<Projet>{
    return this.http.put<Projet>(this.host + '/projets/' +
      p.idprojet, p);
  }
  getComfactsClient(idemploye: number) : Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + '/projets/idemploye=' +
      idemploye);
  }
}
