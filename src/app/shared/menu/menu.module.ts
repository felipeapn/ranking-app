import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,

  ],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule { }
