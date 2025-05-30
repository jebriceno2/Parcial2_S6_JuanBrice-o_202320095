import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AerolineasModule } from './aerolineas/aerolineas.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AerolineasModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
