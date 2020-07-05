import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBibPage } from './search-bib.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBibPageRoutingModule {}
