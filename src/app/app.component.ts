import { Component } from '@angular/core';

import { Stand } from './stand/stand.model';

import { StandService } from './stand/stand.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedStand: Stand;
  styles: object;

  constructor(private standService: StandService) {}

  ngOnInit(): void {
    this.getStand(this.randomId);
  }

  getStand(id: number): void {
    this.selectedStand = this.standService.getStand(id);
  }

  getSelectedStand(stand: Stand): Stand {
    return (this.selectedStand = this.standService.getStand(stand.id));
  }

  getStyles(): object {
    return (this.styles = {
      'align-self': 'flex-end',
    });
  }

  private randomId = Math.floor(Math.random() * Math.floor(13));
}
