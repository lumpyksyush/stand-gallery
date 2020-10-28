import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Stand } from '../stand/stand.model';

import { StandService } from '../stand/stand.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() selectStandEvent = new EventEmitter<Stand>();
  stands: Stand[];

  constructor(private standService: StandService) {}

  ngOnInit(): void {
    this.stands = this.standService.getStands();
  }

  onSelect(stand: Stand): void {
    this.selectStandEvent.emit(stand);
  }
}
