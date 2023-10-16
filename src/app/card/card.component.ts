import { Component, Input } from '@angular/core';
import { cardContent } from '../body/body.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  cardContent!:cardContent
}
