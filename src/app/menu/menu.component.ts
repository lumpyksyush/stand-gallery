import { Component, OnInit, Input } from '@angular/core';

import { StandService } from '../stand/stand.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private standService: StandService) {}

  ngOnInit(): void {}
}
