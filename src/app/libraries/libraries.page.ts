import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.page.html',
  styleUrls: ['./libraries.page.scss'],
})
export class LibrariesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toDHBWBib(): void {
    this.router.navigate(['dhbw-bib']);
  }

}
