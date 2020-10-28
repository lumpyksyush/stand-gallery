import { Injectable } from '@angular/core';

import { STANDS } from './stand-mock';
import { Stand } from './stand.model';

@Injectable({
  providedIn: 'root',
})
export class StandService {
  stands = STANDS;

  constructor() {}

  getStands(): Stand[] {
    return this.stands;
  }

  getStand(id: number): Stand {
    return this.stands.find((stand) => stand.id === id);
  }
}
