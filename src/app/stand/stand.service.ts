import { Injectable } from '@angular/core';

import { STANDS } from './stand-mock';
import { Stand } from './stand.model';

@Injectable({
  providedIn: 'root',
})
export class StandService {
  stands = STANDS;
  constructor() {}

  getStand(name: string): Stand {
    return this.stands.find((stand) => stand.name === name);
  }
}
