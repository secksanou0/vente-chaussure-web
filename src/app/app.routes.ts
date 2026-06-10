import { Routes } from '@angular/router';
import { ListMarque } from './marques/list-marque/list-marque';
import { ListChaussures } from './chaussures/list-chaussures/list-chaussures';
import { AjoutMarque } from './marques/ajout-marque/ajout-marque';

export const routes: Routes = [
    {path:'', redirectTo:'marques', pathMatch:'full'},
    //{path:'', component:ListMarque},
    {path:'marques', component:ListMarque},
    {path:'marques/new', component:AjoutMarque},
    {path:'chaussures', component:ListChaussures},
]

//https://github.com/ssidibe-ept/vente-chaussure-web
