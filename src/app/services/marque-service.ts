import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
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
}
