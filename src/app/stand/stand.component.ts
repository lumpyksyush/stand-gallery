import { Component, OnInit } from '@angular/core';

import { Stand } from './stand.model';
import { STANDS } from '../stand/stand-mock';

import { StandService } from './stand.service';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss'],
})
export class StandComponent implements OnInit {
  stand: Stand;

  constructor(private standService: StandService) {}

  ngOnInit(): void {
    this.getStand();
  }

  getStand(name: string = 'Stone Free'): void {
    this.stand = this.standService.getStand(name);
  }
}
