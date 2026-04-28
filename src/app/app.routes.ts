import { Routes } from '@angular/router';
import { ListMarque } from './marques/list-marque/list-marque';
import { ListChaussures } from './chaussures/list-chaussures/list-chaussures';

export const routes: Routes = [
    {path:'', redirectTo:'marques', pathMatch:'full'},
    //{path:'', component:ListMarque},
    {path:'marques', component:ListMarque},
    {path:'chaussures', component:ListChaussures},
];
//https://github.com/ssidibe-ept/vente-chaussure-web