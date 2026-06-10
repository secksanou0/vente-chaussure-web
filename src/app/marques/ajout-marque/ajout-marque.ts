import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ajout-marque',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './ajout-marque.html',
  styleUrl: './ajout-marque.scss',
})
export class AjoutMarque {
  marqueForm = new FormGroup({
    nom: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    desc: new FormControl(''),
  });
}
