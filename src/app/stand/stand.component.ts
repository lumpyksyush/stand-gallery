import { Component, Input, OnInit } from '@angular/core';

import { Stand } from './stand.model';

import { StandService } from './stand.service';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss'],
})
export class StandComponent implements OnInit {
  @Input() stand: Stand;

  constructor(private standService: StandService) {}

  ngOnInit(): void {}
}
