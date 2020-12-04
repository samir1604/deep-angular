
/* Angular Module */
import { NgModule } from '@angular/core';

/* Public Routing Module */
import { PublicRoutingModule } from './public-routing,module';

/* Share Module */
import { ShareModule } from '../core/shared/share.module';

/* Public Components */
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    PublicRoutingModule,
    ShareModule,
  ],
  exports: [],
  providers: [],
})
export class PublicModule {
  constructor() { }
}
