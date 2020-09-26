import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  artista: any = {};
  canciones: any = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe((params) => {
      this.obtenerArtista(params['id']);
      this.obtenerCanciones(params['id']);
    });
  }

  obtenerArtista(id: string) {
    this.spotify.getArtist(id).subscribe((artista) => {
      // console.log(artista);
      this.artista = artista;
    });
  }

  obtenerCanciones(id: string) {
    this.spotify.getTopTracks(id).subscribe((canciones) => {
      console.log(canciones);
      this.canciones = canciones;
    });
  }
}
