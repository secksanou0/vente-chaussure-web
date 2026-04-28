import { Injectable } from '@angular/core';
import { delay, EMPTY, Observable, of } from 'rxjs';
import { Marque } from '../../vc-models';
import { MARQUES_DATA } from '../../vc-mockup';

@Injectable({
  providedIn: 'root',
})
export class MarqueService {

  getAllMarques():Observable<Marque[]>  {
    // requete vers le backend
    return of(MARQUES_DATA).pipe(delay(3000));
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
