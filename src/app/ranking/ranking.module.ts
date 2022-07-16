import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from './../shared/primeng/primeng.module';
import { RankListComponent } from './rank-list/rank-list.component';
import { RankingRoutingModule } from './ranking-routing.module';



@NgModule({
  declarations: [
    RankListComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    RankingRoutingModule
  ],
  exports: [
    RankListComponent
  ]
})
export class RankingModule { }
