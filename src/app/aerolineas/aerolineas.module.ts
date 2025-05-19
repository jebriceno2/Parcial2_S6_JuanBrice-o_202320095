import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineasListComponent } from './aerolineas-list/aerolineas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AerolineasListComponent],
  exports: [AerolineasListComponent]
})
export class AerolineasModule { }
