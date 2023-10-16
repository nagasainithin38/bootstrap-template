import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-right-area',
  templateUrl: './right-area.component.html',
  styleUrls: ['./right-area.component.css']
})
export class RightAreaComponent {


@Input()
isCollapsed!:boolean

@Output()
isCollapsedChanged:EventEmitter<boolean>;
constructor(){
  this.isCollapsedChanged=new EventEmitter<boolean>();
}

x(y:boolean){
  this.isCollapsedChanged.emit(y)
}

}
