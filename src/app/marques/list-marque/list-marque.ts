import { Component } from '@angular/core';
import { Marque } from '../../../vc-models';
import { MARQUES_DATA } from '../../../vc-mockup';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-marque',
  imports: [JsonPipe],
  templateUrl: './list-marque.html',
  styleUrl: './list-marque.scss',
})
export class ListMarque {
  marques:Marque[]=MARQUES_DATA;
}
