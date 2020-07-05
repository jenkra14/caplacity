import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-dhbw-bib',
  templateUrl: './dhbw-bib.page.html',
  styleUrls: ['./dhbw-bib.page.scss'],
})

export class DhbwBibPage implements OnInit {

  frei = 0;
  seats;

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    return this.http.get<Array<Seat>>('https://caplacity.000webhostapp.com/get.php').subscribe(data => {
      data.forEach(res => {
        if (res.frei === '1') { this.frei++; }
      });
      this.seats = data;
    });
  }

  ngOnInit() {
  }

}

class Seat {
  Platz: string;
  frei: string;
}
