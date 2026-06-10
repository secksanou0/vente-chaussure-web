import { ChangeDetectorRef, Component } from '@angular/core';
import { Marque } from '../../../vc-models';
import { MARQUES_DATA } from '../../../vc-mockup';
import { JsonPipe } from '@angular/common';
import { MarqueService } from '../../services/marque-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-marque',
  imports: [JsonPipe, RouterLink],
  templateUrl: './list-marque.html',
  styleUrl: './list-marque.scss',
})
export class ListMarque {
  marques: Marque[] = [];

  //selectedMarque?:Marque;
  selectedMarque: Marque | undefined;
  errorMsg = '';

  loading: boolean = false;

  constructor(
    private marqueService: MarqueService,
    private cdr: ChangeDetectorRef,
  ) {
    this.loadMarques();
  }

  setSelectedMarque(marque: Marque) {
    this.selectedMarque = marque;
  }

  loadMarques() {
    this.loading = true;
    this.marqueService.getAllMarques().subscribe({
      next: (data: Marque[]): void => {
        this.marques = data;
      },
      error: (error: any): void => {
        console.log('erreur : ' + error);
        this.loading = false;
        const status = error.status;
        if (status === 0) {
          this.errorMsg =
            'Erreur de communication avec le serveur veuillez verifier votre connexion';
        } else {
          this.errorMsg = `${error.message}`;
        }

        this.cdr.detectChanges();
      },
      complete: () => {
        console.log('succes reception marques');
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  supprimeSelectedMarque() {
    if (this.selectedMarque) {
      this.marqueService.supprimeMarque(this.selectedMarque).subscribe({
        error: (error: any): void => {
          console.log('erreur suppression marque');
        },
        complete: () => {
          console.log('succès suppression marque');
          this.loadMarques();
        },
      });
    }
  }
}
