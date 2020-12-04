import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent
  ],
  providers: [],
})
export class ShareModule {
  constructor() { }
}
