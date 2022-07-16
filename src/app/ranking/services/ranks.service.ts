import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Rank } from '../models/rank';

@Injectable({
  providedIn: 'root'
})
export class RanksService {

  private readonly API = '/assets/rank.json';

  constructor(private httpClient: HttpClient) { }

  list () {
    return this.httpClient.get<Rank[]>(this.API)
      .pipe(
        tap(ranks => console.log(ranks))
      )
  }

}
