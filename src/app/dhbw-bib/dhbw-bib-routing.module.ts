import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhbwBibPage } from './dhbw-bib.page';

const routes: Routes = [
  {
    path: '',
    component: DhbwBibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhbwBibPageRoutingModule {}
