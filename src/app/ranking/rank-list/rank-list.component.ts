import { Icon } from '../models/icon';
import { Component, OnInit } from '@angular/core';
import { Rank } from '../models/rank';
import { RanksService } from '../services/ranks.service';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit {

  ranks: Rank[] = []

  changedUp: Icon = { name: 'pi-angle-double-up', color: 'text-green-700' }
  changedDown: Icon = { name: 'pi-angle-double-down', color: 'text-red-700' }
  changedNone: Icon = { }

  constructor(private ranksService: RanksService) {
    ranksService.list().subscribe((data) => {
      this.ranks = data
      this.setRankIcon()
    })

   }

  ngOnInit(): void {
  }

  setRankIcon() {
    this.ranks.forEach((rank) => {
      rank.rankChangedIcon = this.getSignalIcon(rank.rankChangedDirection)
      console.log(rank.rankChangedIcon)
    })
    console.log(this.ranks)
  }
  getSignalIcon(rankChangedDirection:string){

    if (rankChangedDirection === 'up') {
      return this.changedUp
    }

    if (rankChangedDirection === 'down') {
      return this.changedDown
    }

    return this.changedNone
  }

}
