import { Injectable } from '@angular/core';
import { delay, EMPTY, Observable, of } from 'rxjs';
import { Marque } from '../../vc-models';
import { MARQUES_DATA } from '../../vc-mockup';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarqueService {
  readonly urlBase = `${environment.API_BASE_URL}/marques`;
  constructor(private http: HttpClient) { }

  getAllMarques():Observable<Marque[]>  {
    // requete vers le backend
    //return of(MARQUES_DATA).pipe(delay(3000));
    return this.http.get<Marque[]>(this.urlBase);
  }

    supprimeMarque(selectedMarque: Marque):Observable<void> {
      const index =MARQUES_DATA.findIndex((m)=>m.id === selectedMarque.id);
      console.log('index',index);
      if (index > -1) {
        MARQUES_DATA.splice(index, 1);
      }
      return EMPTY;
    }
}
