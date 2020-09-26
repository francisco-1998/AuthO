import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ArtistComponent } from './components/artist/artist.component';

export const Rutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'test', component: TestComponentComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
