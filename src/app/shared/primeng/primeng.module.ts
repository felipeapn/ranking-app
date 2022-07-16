import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';

@NgModule({

  exports: [
    TableModule,
    AvatarModule,
    AvatarGroupModule,
  ]
})
export class PrimengModule { }
