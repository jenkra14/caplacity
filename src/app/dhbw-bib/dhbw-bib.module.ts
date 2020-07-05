import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhbwBibPageRoutingModule } from './dhbw-bib-routing.module';

import { DhbwBibPage } from './dhbw-bib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhbwBibPageRoutingModule
  ],
  declarations: [DhbwBibPage]
})
export class DhbwBibPageModule {}
