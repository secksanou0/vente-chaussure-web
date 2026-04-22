import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntetePage } from "./entete-page/entete-page";
import { FooterPage } from "./footer-page/footer-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EntetePage, FooterPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vente-chaussure-web');
}
