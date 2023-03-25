import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {

  @Input("propTitle") propTitle: string;
  @Input("propValue") propValue: string | Date;
}
