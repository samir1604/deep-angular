import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    MatSliderModule,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    MatSliderModule,
    NotFoundComponent,
  ],
  providers: [],
})
export class ShareModule {
  constructor() { }
}
