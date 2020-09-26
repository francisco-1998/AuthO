import { DomseguroPipe } from './pipes/domseguro.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Importacion para trabajar con las APIS
import { HttpClientModule } from '@angular/common/http';

//Componente creados
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Importación de las rutas
import { Rutas } from './app.routes';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TargetComponent } from './components/shared/target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    TestComponentComponent,
    NoimagePipe,
    DomseguroPipe,
    TargetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Rutas, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
