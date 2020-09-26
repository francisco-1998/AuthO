import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  pais: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data:any) => {
        this.pais = data;
        console.log(data);
      });
  }

  ngOnInit(): void {}
}
