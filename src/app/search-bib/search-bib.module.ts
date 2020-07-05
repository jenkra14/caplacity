import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBibPageRoutingModule } from './search-bib-routing.module';

import { SearchBibPage } from './search-bib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBibPageRoutingModule
  ],
  declarations: [SearchBibPage]
})
export class SearchBibPageModule {}
